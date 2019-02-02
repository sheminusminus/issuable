import React from 'react';

import { Header } from 'modules/core/components';

const Layout = ({ children }) => (
  <div className="main">
    <Header />

    {children}
  </div>
);

export default Layout;
