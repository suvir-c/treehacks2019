import { Report } from 'radiks';
import * as Constants from './constants';

const currentReports = Report ? Report.currentReports() : null;
const initialState = {
  currentReports,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.SUBMIT_NEW_REPORT: {
      return {
        ...state,
        currentReports: action.reports,
      };
    }
    default:
      return state;
  }
};
