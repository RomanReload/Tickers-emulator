import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  FormControl,
  InputLabel,
} from '@material-ui/core';
import useStyles from './style';
import MainInput from './InputMain';
import {useSelector} from 'react-redux';
import FoundTickersList from './FoundTickersList';
import PauseButton from './PauseButton';

const HeaderBlock = () => {
  const foundTickers = useSelector(
      ({tickerReducer}) => tickerReducer.searchTickers);
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <AppBar style={{background: '#2196f3'}} position="static">
          <Toolbar>
            <div className={classes.title}>
              <PauseButton/>
            </div>
            <div className={classes.form}>
              <FoundTickersList tickers={foundTickers}/>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor="input-with-icon-adornment">Find
                  Ticker</InputLabel>
                <MainInput/>
              </FormControl>
            </div>

          </Toolbar>
        </AppBar>
      </div>
  );
};
export default HeaderBlock;