import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
const api = '';
function* getTournamentsAsync() {
  const res = yield axios.get(api);
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
