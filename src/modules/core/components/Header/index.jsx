import React from 'react';
import { Link } from 'react-router-dom';

import { Routing } from 'config';
import { classie } from 'utils';
import Button from '../Button';

const Header = ({ children, className, onLogout }) => (
  <header
    className={classie(['header', className])}>
    <Link to={Routing.clientHome()}>
      <h4 className="page-title">
        Issuable
      </h4>
    </Link>

    <Button onClick={onLogout}>Logout</Button>
  </header>
);

export default Header;
