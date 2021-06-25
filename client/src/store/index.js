import {createStore,applyMiddleware} from 'redux';
import reducers from './reducer/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import MySaga from '../saga/saga'

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducers ,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(MySaga)
export default store;