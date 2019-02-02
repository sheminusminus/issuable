import React from 'react';

import { classie } from 'utils';
import Button from '../Button';

const Header = ({ children, className }) => (
  <header
    className={classie(['header', className])}>
    <h4 className="page-title">Issuable</h4>

    <Button>Logout</Button>
  </header>
);

export default Header;
