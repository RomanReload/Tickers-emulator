import {createSelector} from 'reselect';

const getTickers = (state) => {
  const {tickerReducer} = state;
  return tickerReducer.showedTickers;
};
const getSelectTickers = (state) => {
  const {tickerReducer} = state;
  return tickerReducer.selected;
};

export const tickersSelector = createSelector(
    getTickers,
    (tickers) => {
      return tickers;
    },
);


export const selectTickersSelector = createSelector(
    [getTickers, getSelectTickers],
    (shTickers, selTick) => {
      if (selTick.length === 0) {
        return [];
      }
      return shTickers.filter((item) => {
        const name = selTick.find(
            ({ticker}) => ticker === item.ticker);
        return name === undefined ? null : item;
      });
    });



