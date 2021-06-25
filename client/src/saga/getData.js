import {call, put, take} from 'redux-saga/effects';
import {io} from 'socket.io-client';
import {eventChannel} from 'redux-saga';
import {GET_ALL_TICKERS} from '../store/reducer/reducers';
import {server} from '../components/Header/PauseButton';

const socketServerURL = 'http://localhost:4000';
let socket;

const socketConnection = async () => {
  socket = io(socketServerURL);
  socket.emit('start');
  const data = await socket.on('ticker', (data) => data);
  return data;
};

const createSocketChannel = (socket) => {
  return eventChannel(emit => {
    const handler = (data) => {
      emit(data);
    };
    socket.on('ticker', handler);
    return () => {
      socket.off('ticker', handler);
    };
  });
};

export const putTickersToStore = (data) => {
  return {type: GET_ALL_TICKERS, payload: data};
};

function* tickersListener() {
  const socket = yield call(socketConnection);
  const socketChannel = yield call(createSocketChannel, socket);
  while (server === true) {
    const payload = yield take(socketChannel);
    yield put(putTickersToStore(payload));
  }
}

export default tickersListener;
