import { combineReducers } from 'redux';

import UserReducer from './user/reducer';
import ReportReducer from './report/reducer';

export default combineReducers({
  user: UserReducer,
  reports: ReportReducer,
});
