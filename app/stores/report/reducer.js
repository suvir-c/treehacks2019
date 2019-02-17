import * as Constants from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case Constants.SUBMIT_NEW_REPORT: {
      return [...state, action.reports];
    }
    default:
      return state;
  }
};
