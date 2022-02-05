import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga from '../lib/createRequestSaga';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] =
  createRequestSaga('auth/SIGNIN');
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestSaga('auth/SIGNUP');

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // signup, signin
    key, // email,password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);

export const signup = createAction(SIGNUP, ({ email, password }) => ({
  email,
  password,
}));
export const signin = createAction(SIGNIN, ({ email, password }) => ({
  email,
  password,
}));

// create redux-sage
const signinSage = createRequestSaga(SIGNIN, authAPI.signin);
const signupSage = createRequestSaga(SIGNUP, authAPI.signup);
export function* authSaga() {
  yield takeLatest(SIGNUP, signupSage);
  yield takeLatest(SIGNIN, signinSage);
}
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  signin: {
    email: '',
    password: '',
  },
  signup: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [SIGNIN_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNIN_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
