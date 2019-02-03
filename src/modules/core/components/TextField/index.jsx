import React from 'react';

import { classie } from 'utils';

const TextField = ({
  value = '',
  name,
  onChange,
  className,
  onKeyDown = () => {},
}) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className={classie(['textField', className])} />
);

export default TextField;
