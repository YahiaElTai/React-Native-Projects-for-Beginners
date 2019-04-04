import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './types';

export const emailChanged = email => ({
  type: EMAIL_CHANGED,
  payload: email,
});

export const passwordChanged = password => ({
  type: PASSWORD_CHANGED,
  payload: password,
});

const loginUserSuccess = (dispatch, user, navigation) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  navigation.navigate('EmployeeList');
};

const loginUserFail = dispatch => dispatch({ type: LOGIN_USER_FAIL });

export const loginUser = ({ email, password, navigation }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user, navigation))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user, navigation))
        .catch(() => loginUserFail(dispatch));
    });
};
