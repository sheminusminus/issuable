import * as constants from './constants';

export const name = 'ui';

export const initialState = {
  issuesSort: {
    property: 'createdAt',
    direction: 'desc',
  },
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case constants.SET_ISSUE_SORT:
      return {
        ...state,
        issuesSort: {
          property: action.payload.property,
          direction: action.payload.direction,
        },
      };

    default:
      return state;
  }
}
