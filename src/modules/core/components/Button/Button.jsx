import React from 'react';

import { classie } from 'utils';

const Button = ({ children, onClick, className, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classie(['button', className])}
  >
    {children}
  </button>
);

export default Button;
