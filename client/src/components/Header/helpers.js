import {uniqueId} from 'lodash';
import {Paper} from '@material-ui/core';
import React from 'react';
import AddCircleOutlineRoundedIcon
  from '@material-ui/icons/AddCircleOutlineRounded';
import {SELECTED_TICKERS} from '../../store/reducer/reducers';

export const helper = (t, classes, dispatch) => {

  return (
      <li key={uniqueId(t.ticker)}><Paper
          className={classes.root}>
        <p className={classes.tBlock}>{t.ticker} <AddCircleOutlineRoundedIcon
            className={classes.icon}
            onClick={(e) => dispatch({type: SELECTED_TICKERS, payload: t})}/>
        </p>
      </Paper>

      </li>
  );
};