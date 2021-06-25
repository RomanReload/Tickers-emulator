import {Grid, Paper} from '@material-ui/core';
import {useStyles} from '../../style/style';
import Ticker from '../ticker';
import {useDispatch, useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  selectTickersSelector,
} from '../../Selector/selector';
import {DELETE_SELECTED} from '../../../store/reducer/reducers';

const SelectedTickers = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({type: DELETE_SELECTED});
  };
  const selectedTickers = useSelector(selectTickersSelector);
  const classes = useStyles();
  return (
      <>
        <Grid container
              style={{boxShadow: '0px 5px 5px -5px rgba(34, 60, 80, 0.6)'}}
              justify="center"
              alignItems="center"
              spacing={2}>
          {selectedTickers.length === 0 ? <Grid item xs={12}> <Paper
                  className={classes.selectedPaper} elevation={0}>
                No Selected Tickers
              </Paper></Grid>
              : <>
                <Ticker props={selectedTickers}/>
                <Grid item xs={12}>
                  <Paper
                      className={classes.selectedPaper} elevation={0}>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon/>}
                        onClick={handleDelete}
                    >
                      Delete Selected
                    </Button>
                  </Paper>
                </Grid>
              </>
          }
        </Grid>
      </>
  );
};
export default SelectedTickers;