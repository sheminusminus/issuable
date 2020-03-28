import React from 'react';

import Button from '../Button';
import CardPanel from './CardPanel';

import { Padding } from '../storyDecorators';

export default {
  title: 'CardPanel',
  decorators: [Padding],
};

export const withContents = () => (
  <CardPanel className="grid center-kids">
    <Button>
      Card panel button
    </Button>
  </CardPanel>
);
