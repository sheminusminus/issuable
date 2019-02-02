import * as constants from './constants';

export const name = 'auth';

export const initialState = {
  token: null,
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };

    default:
      return state;
  }
}
