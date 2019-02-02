import React from 'react';

import { classie } from 'utils';

const VerticalCenter = ({ children, className }) => (
  <div
    className={classie(['vert-center', className])}>
    {children}
  </div>
);

export default VerticalCenter;
