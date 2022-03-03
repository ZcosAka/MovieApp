import { all, fork } from 'redux-saga/effects';
import { watchMovieSaga } from './movieSaga';
import { watchLoginSaga } from './loginSaga';
import { watchRegisterSaga } from './registerSaga';

export default function* rootSaga() {
  yield all([
    fork(watchMovieSaga),
    fork(watchLoginSaga),
    fork(watchRegisterSaga),
  ]);
}
