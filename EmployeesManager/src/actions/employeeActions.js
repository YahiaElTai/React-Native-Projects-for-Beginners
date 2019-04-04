import firebase from 'firebase';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEES_FETCH_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        navigation.navigate('EmployeeList');
        dispatch({ type: EMPLOYEE_CREATE });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot =>
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val(),
        }),
      );
  };
};

export const employeeSave = ({ name, phone, shift, uid, navigation }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        navigation.navigate('EmployeeList');
      });
  };
};

export const employeeDelete = ({ uid, navigation }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => navigation.navigate('EmployeeList'));
  };
};
