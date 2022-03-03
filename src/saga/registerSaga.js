import { call, put, takeLatest } from 'redux-saga/effects';
import { RegisterService } from '../Services/Api/Register/register';
import {
  fetchRegister,
  fetchRegisterSuccess,
  fetchRegisterFailed,
} from '../redux/reducers/registerSlice';
import { Alert } from 'react-native';

export function* registerSaga(action) {
  try {
    const { payload } = action;
    const res = yield call(RegisterService.getRegister, {
      full_name: payload.full_name,
      email: payload.email,
      password: payload.password,
      confirPassword: payload.confirPassword,
    });
    console.log('res', res);
    if (res.status === 200 && res.data.error === false) {
      if (payload.password !== payload.confirPassword) {
        Alert.alert('Mật khẩu và Xác nhận mật khẩu không đúng!');
      } else {
        yield put(fetchRegisterSuccess(res.data.data));
        Alert.alert('Đăng ký thành công');
      }
    } else {
      Alert.alert('Vui lòng điền đầy đủ thông tin!');
    }
  } catch (e) {
    yield put(fetchRegisterFailed(e.message));
  }
}

export function* watchRegisterSaga() {
  yield takeLatest(fetchRegister.type, registerSaga);
}
