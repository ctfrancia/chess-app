import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
const apiKey='901b2d2200474ded8510b9f578f11aa1';
const api = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;

function* getTournamentsAsync() {
  const res = yield axios.get(api);
	console.log('res?', res);
  yield put({type: 'GET_TOURNAMENTS_SUCCESS', json: res.data.articles });
}

function* actionWatcher() {
  yield takeLatest('GET_TOURNAMENTS_REQUEST', getTournamentsAsync);
}

export default function* rootSaga() {
	yield all([
		actionWatcher(),
	]);
}
