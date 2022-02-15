import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
// TODO 여기 같이 createAction 하면 동작 안함
// import { createAction } from 'redux-action';
import * as authAPI from '../lib/api/auth';
import { call, takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes('user/CHECK');
const SIGNOUT = 'user/SIGNOUT';

export const tempUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const signout = createAction(SIGNOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (err) {
    console.log('localStorage is not working');
  }
}

function* signoutSaga() {
  try {
    yield call(authAPI.signout);
    localStorage.removeItem('user');
  } catch (err) {
    console.log(err);
  }
}
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(SIGNOUT, signoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [SIGNOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
  },
  initialState,
);
