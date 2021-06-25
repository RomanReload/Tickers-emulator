import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    backgroundColor: 'white',
    width: '40%',
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },
  margin: {
    margin: theme.spacing(0),
  },
}));
export const inputStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '2px',
    margin: '3px',
    width: '150px',
    height: '30px',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  ul: {
    color: 'black',
    position: 'absolute',
    top: '50px',
    right: '20%',
    '& > *': {
      listStyleType: 'none',
    },
  },
  tBlock: {
    display: 'flex',
    margin: '2 auto',
    height: '15px',
    width: '100%',
    padding: '0px',
    justifyContent: 'space-between',
  },
  icon: {
    display: 'block',
    color: 'green',
    width: '50px',
    height: '20px',
    cursor: 'pointer',

  },

}));

export default useStyles;