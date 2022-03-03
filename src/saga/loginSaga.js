import {
  call,
  put,
  takeLatest,
  takeEvery,
  delay,
  takeLeading,
  take,
} from 'redux-saga/effects';
import { LoginService } from '../Services/Api/Login/Login';
import { LogOutService } from '../Services/Api/LogOut/LogOut';
import {
  fetchLogin,
  fetchLoginSuccess,
  fetchLoginFailed,
  fetchLogout,
} from '../redux/reducers/loginSlice';
import { showLoading, hideLoading } from '../redux/reducers/loadingSlice';
import { Alert } from 'react-native';
import { saveUser, removeUser, getUser } from '../local/saveData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* loginSaga(action) {
  try {
    const { payload } = action;
    yield put(showLoading());
    yield delay(50);
    const res = yield call(LoginService.getLogin, {
      email: payload.email,
      password: payload.password,
    });
    console.log('resLogin', res);
    if (res.status === 200 && res.data.error === false) {
      yield put(fetchLoginSuccess(res.data.data));
      yield call(saveUser(res.data.data.access_token));
    } else {
      if (payload.email.length === 0) {
        yield delay(10);
        yield Alert.alert('Vui lòng nhập email');
      } else if (payload.password.length === 0) {
        yield delay(10);
        yield Alert.alert('Vui lòng nhập password');
      } else if (payload.email.length === 0 && payload.password.length === 0) {
        yield delay(10);
        yield Alert.alert('Vui lòng nhập email và mật khẩu');
      } else {
        yield delay(10);
        yield Alert.alert('Vui lòng kiểm tra email hoặc mật khẩu');
      }
    }
  } catch (e) {
    yield put(fetchLoginFailed(e.message));
  } finally {
    yield put(hideLoading());
  }
}

export function* logoutSaga() {
  try {
    yield put(showLoading());
    yield delay(100);
    const res = yield call(LogOutService.getLogOut);
    console.log('logout', res);
    const { data } = res;
    if (res.status === 200 && data.error === false) {
      yield call(removeUser);
      yield put(fetchLogout());
    } else {
      yield delay(100);
      yield Alert.alert(data.message);
    }
  } catch (e) {
    console.log(e);
  } finally {
    yield put(hideLoading());
  }
}

export function* watchLoginSaga() {
  yield takeLatest(fetchLogin.type, loginSaga);
  yield takeLeading(fetchLogout.type, logoutSaga);
}
