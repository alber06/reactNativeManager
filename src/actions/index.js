import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(user => dispatchUserSuccess(dispatch, user))
      .catch(() => dispatchUserFail(dispatch));
  };
};

// const dispatchLoading = (dispatch, isLoading) => {
//   dispatch({ type: LOADING, payload: isLoading });
// };

const dispatchUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const dispatchUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
