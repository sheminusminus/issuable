import React from 'react';

import Auth from './presenter';

export default {
  title: 'Auth',
};

export const defaultAuth = () => (
  <Auth
    history={{ push: (route) => console.log(route) }}
    saveToken={() => {}}
  />
);

export const withToken = () => (
  <Auth
    history={{ push: (route) => console.log(route) }}
    saveToken={() => {}}
    token="8170a5fa0095df68a313d"
  />
);
