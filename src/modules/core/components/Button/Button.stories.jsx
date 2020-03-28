import React from 'react';

import Button from './Button';

export default { title: 'Button' };

export const withText = () => (
  <Button className="grid vert-center">
    <span>Hello Button</span>
  </Button>
);

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
