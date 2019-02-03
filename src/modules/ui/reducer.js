import * as constants from './constants';

export const name = 'ui';

export const initialState = {
  issuesSort: {
    property: 'createdAt',
    direction: 'desc',
  },
  issuesOrder: {},
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

    case constants.SET_ISSUE_ORDER:
      return {
        ...state,
        issuesOrder: {
          ...state.issuesOrder,
          [action.payload.repoId]: action.payload.issueIds,
        },
      };

    default:
      return state;
  }
}
