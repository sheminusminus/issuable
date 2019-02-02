import React from 'react';

import { classie } from 'utils';

const SpacerColumn = ({ children, className }) => (
  <div
    className={classie(['column', className])}>
    {children}
  </div>
);

export default SpacerColumn;
