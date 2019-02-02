import React from 'react';

import { classie } from 'utils';

const TextField = ({ value = '', name, onChange, className }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    className={classie(['textField', className])} />
);

export default TextField;
