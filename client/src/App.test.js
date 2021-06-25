import {render} from '@testing-library/react';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import {tickerReducer} from './store/reducer/reducers';
import {putTickersToStore} from './saga/getData';
import {selectTickersSelector} from './components/Selector/selector';
import {create} from 'react-test-renderer';
import FoundTickersList from './components/Header/FoundTickersList';

test('tickers main block render', () => {
  render(<Provider store={store}>
    <App/>
  </Provider>)
  ;
  const mainTickerEl = document.querySelector('#ticker-main');
  expect(mainTickerEl).toBeInTheDocument();
});

test('ticker reducer', () => {
  const actionArr = [
    {ticker: 'A', price: 1, change: 2},
    {ticker: 'B', price: 2, change: 2},
    {ticker: 'C', price: 3, change: 2},
  ];
  const action = putTickersToStore(actionArr);
  const initialState = {
    showedTickers: [],
  };
  let newState = tickerReducer(initialState, action);
  expect(newState.showedTickers.length).toBe(3);
  expect(newState.showedTickers[0].hasOwnProperty('difference')).toBe(true);
});

test('selector test', () => {
  const showedArr = [
    {ticker: 'A', price: 1, change: 2},
    {ticker: 'B', price: 2, change: 2},
    {ticker: 'C', price: 3, change: 2},
  ];
  const selectedArr = [
    {ticker: 'C', price: 3, change: 2},
    {ticker: 'F', price: 3, change: 2},
    {ticker: 'G', price: 3, change: 2},
    {ticker: 'L', price: 3, change: 2},
  ];
  const state = {
    tickerReducer: {
      showedTickers: showedArr,
      selected: selectedArr,
    },
  };
  const selector = selectTickersSelector(state, state);
  expect(selector[0] === showedArr[2]).toBe(true);
});

describe('li added to list items', () => {
  test('test component', () => {
    const showedArr = [
      {ticker: 'AAPL', price: 100, change: 2},
    ];
    const component = create(<Provider store={store}><FoundTickersList
        tickers={[showedArr]}/></Provider>);
    const li = component.root.findByType('li');
    expect(typeof li).toBe('object');
  });
});


