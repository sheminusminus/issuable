import * as constants from './constants';

export function saveToken(token) {
  return {
    type: constants.SAVE_TOKEN,
    payload: {
      token,
    },
  };
}
