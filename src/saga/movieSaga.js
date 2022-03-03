import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { MovieService } from '../Services/Api/MovieList/movieList';
import {
  fetchMovie,
  fetchMovieFailed,
  fetchMovieSuccess,
  setPaging,
} from '../redux/reducers/movieSlice';
import { Alert } from 'react-native';

export function* movieSaga(action) {
  try {
    const { payload } = action;
    const res = yield call(MovieService.getPage, {
      currentPage: payload.currentPage,
      per_page: payload.per_page,
    });
    const { data, paging, error } = res.data;
    if (res.status === 200 && error === false) {
      yield put(fetchMovieSuccess(data));
      yield put(setPaging(paging));
    } else {
      Alert.alert('Error');
    }
  } catch (e) {
    yield put(fetchMovieFailed(e.message));
  }
}

export function* watchMovieSaga() {
  yield takeLatest(fetchMovie.type, movieSaga);
}
