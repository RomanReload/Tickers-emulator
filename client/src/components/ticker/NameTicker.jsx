import {Box} from '@material-ui/core';

const NameBlock = (props) =>{
const {classes , tickerName} = props;
  return(
      <>
        <Box bgcolor="info.main" color={'info.contrastText'}
             className={classes}>
          <h4>{tickerName}</h4>
        </Box>
      </>
  )
}

export default NameBlock;