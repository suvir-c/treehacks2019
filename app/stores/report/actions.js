// import { Report } from 'radiks';
import * as Constants from './constants';

export function submitNewReport(reportsData) {
  return dispatch =>
    dispatch({
      type: Constants.SUBMIT_NEW_REPORT,
      reports: reportsData,
    });
}
