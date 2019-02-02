import React from 'react';

import { Routing } from 'config';
import { Header } from 'modules/core/components';

function handleLogout() {
  localStorage.clear();
  window.location.assign(Routing.clientHome());
}

const Layout = ({ children }) => (
  <div className="main">
    <Header onLogout={handleLogout} />

    {children}
  </div>
);

export default Layout;
