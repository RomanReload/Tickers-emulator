const differenceCount = (prevProps, currentProps = []) => {
  const updatingArr = [];
  if (prevProps.length === 0) {
    currentProps.forEach((item) => {
      const priceDiff = 0;
      const percenttDiff = 0;
      item['difference'] = {priceDiff, percenttDiff};
      updatingArr.push(item);
    });
    return updatingArr;
  }

  currentProps.forEach(item => {
    const currTicker = item.ticker;
    const oldTicker = prevProps.find(({ticker}) => ticker === currTicker);
    let price = ((Number(oldTicker.price)) - Number(item.price));
    const percent = (Number(item.price) - Number(oldTicker.price)) /
        Number(oldTicker.price) * 100;
    item.difference = {
      priceDiff: price.toFixed(2),
      percenttDiff: percent.toFixed(2),
    };
    updatingArr.push(item);
  });

  return updatingArr;
};

export const findMatchingTickers = (char = '', tickerArr) => {
  if(char === ''){
    return []
  };
  const suitableArr = tickerArr.filter(t => {
    const name = t.ticker;
    return name.toLowerCase().includes(char.toLowerCase());
  });
  return suitableArr;
};

export default differenceCount;