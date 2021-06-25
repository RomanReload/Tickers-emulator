import React from 'react';
import {inputStyles} from './style';
import {helper} from './helpers';
import {useDispatch} from 'react-redux';



const FoundTickersList = ({tickers}) => {
  const dispatch = useDispatch();
  const classes = inputStyles();
  return (
      <>
        <ul className={classes.ul}>
          {tickers.map(t => {
            return helper(t , classes , dispatch);
          })}
        </ul>
      </>
  );
};

export default FoundTickersList;