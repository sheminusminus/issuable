import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import CardPanel from '../CardPanel';
import EmptyState from './EmptyState';

import { Padding } from '../storyDecorators';

const colors = ['#11cdef', '#5e72e4', '#172b4d', '#f5365c', '#ff9f89', '#2dce89'];

export default {
  title: 'EmptyState',
  decorators: [withKnobs, Padding],
};

export const defaultEmptyState = () => (
  <EmptyState color={select('Color', colors, colors[0])} />
);

export const inCardPanel = () => (
  <CardPanel>
    <EmptyState color={select('Color', colors, colors[0])} />
  </CardPanel>
);
