import {takeEvery} from 'redux-saga/effects';
import tickersListener from './getData';

export const FETCH_TICKETS_DATA = 'FETCH-TICKERS-DATA';

function* MySaga() {
  yield takeEvery(FETCH_TICKETS_DATA, tickersListener);
}

export default MySaga;