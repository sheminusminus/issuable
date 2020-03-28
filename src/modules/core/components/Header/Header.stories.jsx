import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Router } from '../storyDecorators';

import Header from './Header';

const colors = ['#11cdef', '#5e72e4', '#172b4d', '#f5365c', '#ff9f89', '#2dce89'];

export default {
  title: 'Header',
  decorators: [withKnobs, Router],
};

export const defaultHeader = () => (
  <Header color={select('Background', colors, colors[1])} />
);
