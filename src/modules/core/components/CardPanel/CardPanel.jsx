import React from 'react';

import { classie } from 'utils';

const CardPanel = ({ children, className }) => (
  <div
    className={classie(['card-panel', className])}>
    {children}
  </div>
);

export default CardPanel;
