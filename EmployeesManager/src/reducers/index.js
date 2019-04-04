import { combineReducers } from 'redux';
import authReducer from './authReducer';
import employeeFormReducer from './employeeFormReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  auth: authReducer,
  employeeForm: employeeFormReducer,
  employees: employeeReducer,
});
