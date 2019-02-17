// import { Report } from 'radiks';
import * as Constants from './constants';

const submitNewReport = reportsData => ({
  // TODO: call some blockstack function to write new report to db
  type: Constants.SUBMIT_NEW_REPORT,
  reports: reportsData,
});

export default {
  submitNewReport,
};
