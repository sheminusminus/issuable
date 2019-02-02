import * as constants from './constants';

export function setIssuesSort(property, direction) {
  return {
    type: constants.SET_ISSUE_SORT,
    payload: {
      property,
      direction,
    },
  };
}
