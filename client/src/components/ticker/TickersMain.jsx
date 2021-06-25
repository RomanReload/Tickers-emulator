import {Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Ticker from './ticker';
import {tickersSelector} from '../Selector/selector';
import {CircularProgress} from '@material-ui/core';
import {loaderStyle} from '../style/style';
import SelectedTickers from './SelectedTickers/SelectedTickers';

const TickersBlock = () => {
  const tickers = useSelector(tickersSelector);
  return (
      <>
      <SelectedTickers/>
      <Grid container
            id={'ticker-main'}
            justify="center"
            alignItems="center"
            spacing={1}
      >
        {tickers.length === 0 ?
            <CircularProgress size={100} style={loaderStyle}/> :
            <>
              <Ticker props={tickers}/></>}
      </Grid>
      </>

  );
}
;

export default TickersBlock;