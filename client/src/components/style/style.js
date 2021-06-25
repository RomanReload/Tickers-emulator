import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px',
    '& > *': {
      margin: theme.spacing(2),
      padding: '1px',
      width: '80%',
      justifyContent: 'center',
    },
  },
  boxName: {
    display: 'flex',
    justifyContent: 'center',
    height: '55px',
  },
  boxInfo: {
    display: 'flex',
    margin: theme.spacing(1),
    padding: '5px',
    justifyContent: 'space-between',
    height: '15px',
    '& > *': {

      display: 'flex',
      color:`rgba(99, 99, 99, 1);`,
      padding: '3px',
      text: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontWeight: '600',
    },
  },
  selectedPaper :{
    display:'flex',
    justifyContent:'space-around',
    color:'gray',
    margin:'10px',
    height:'20px',

  }

}));

export const  loaderStyle = {
  display: 'block',
  margin: '100px',
};
