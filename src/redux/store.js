import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import movieListReducer from '../redux/reducers/movieSlice';
import loginReducer from '../redux/reducers/loginSlice';
import registerReducer from './reducers/registerSlice';
import loadingReducer from './reducers/loadingSlice';

const rootReducer = {
  movies: movieListReducer,
  login: loginReducer,
  register: registerReducer,
  loading: loadingReducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});



sagaMiddleware.run(rootSaga);

export default store;
