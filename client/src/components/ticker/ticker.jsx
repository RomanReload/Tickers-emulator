import {
  Grid,
  Paper,
} from '@material-ui/core';
import {uniqueId} from 'lodash';
import {useStyles} from '../style/style';
import DifferentBlock from './DiffComponent';
import DataTickerBlock from './DataBlock';
import NameBlock from './NameTicker';
import PriceBlock from './PriceBlock';

const Ticker = ({props}) => {
  const tickers = props;
  const classes = useStyles();
  return (
      <>
        {tickers.map(item => {
          const {ticker, price, difference, last_trade_time} = item;
          return (
              <Grid className={classes.root} key={uniqueId(ticker)} item xs={12}
                    sm={6} md={4}>
                <Paper elevation={5}>
                  <NameBlock classes={classes.boxName} tickerName={ticker}/>
                  <PriceBlock classes={classes.boxInfo} price={price}/>
                  <DifferentBlock classes={classes.boxInfo}
                                  difference={difference}/>
                  <DataTickerBlock classes={classes.boxInfo}
                                   data={last_trade_time}/>
                </Paper>
              </Grid>
          );
        })}
      </>
  );
};

export default Ticker;