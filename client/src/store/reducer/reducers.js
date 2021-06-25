import {combineReducers} from 'redux';
import differenceCount, {findMatchingTickers} from './helpers';

export const GET_ALL_TICKERS = 'GET-ALL-TICKERS';
export const SEARCH_LIST = 'SEARCH-LIST';
export const SELECTED_TICKERS = 'SELECTED-TICKERS';
export const DELETE_SELECTED = 'DELETE-SELECTED';
const initialState = {
  tickers: [],
  showedTickers: [],
  searchTickers: [],
  selected: [],

};
export const tickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TICKERS: {
      const {showedTickers} = state;
      const newTickersDb = action.payload;
      let bdTickers = differenceCount(showedTickers, newTickersDb);
      return {...state, showedTickers: bdTickers, tickers: bdTickers};
    }
    case SEARCH_LIST: {
      const {tickers} = state;
      const foundTickers = findMatchingTickers(action.payload, tickers);
      return {...state, searchTickers: foundTickers};
    }
    case SELECTED_TICKERS: {
      return {...state, selected: [...state.selected, action.payload]};
    }
    case DELETE_SELECTED: {
      return {...state, selected: []};
    }
    default:
      return state;
  }
};
const reducers = combineReducers({
  tickerReducer: tickerReducer,
});
export default reducers;
