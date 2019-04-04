import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMPLOYEE_UPDATE:
    return { ...state, [action.payload.prop]: action.payload.value };
  case EMPLOYEE_CREATE:
    return { ...state, ...INITIAL_STATE };
  case EMPLOYEE_SAVE_SUCCESS:
    return { ...state, ...INITIAL_STATE };
  default:
    return state;
  }
};
