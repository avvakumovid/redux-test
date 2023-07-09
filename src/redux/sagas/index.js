import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  select,
  put,
  call,
  fork,
  all,
  race,
  spawn,
} from '@redux-saga/core/effects';
import {
  decrement,
  getLatestNews,
  increment,
  setLatestNews,
  setPopularNews,
  getPopularNews,
  getNews,
  setLatestNewsError,
  setPopularNewsError,
} from '../slices/testSlice';
import {
  getLatestNews as GetLatestNews,
  getPopularNews as GetPopularNews,
} from '../../api/index';

export function* handleLatestNews() {
  try {
    const { hits } = yield call(GetLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch (e) {
    yield put(setLatestNewsError(e.message));
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(GetPopularNews);
    yield put(setPopularNews(hits));
  } catch (e) {
    yield put(setPopularNewsError(e.message));
  }
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
  // yield all([call(handleLatestNews), call(handlePopularNews)]);
}

export function* watcherPopularSage() {
  yield takeEvery(getPopularNews.type, handlePopularNews);
}

export function* watcherLatestSage() {
  yield takeEvery(getLatestNews.type, handleLatestNews);
}

// export function* watchClickSaga() {
//   yield takeEvery(getLatestNews.type, handleNews);
// }

export default function* rootSaga() {
  yield all([fork(watcherLatestSage), fork(watcherPopularSage)]);
}
