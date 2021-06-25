import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';
import {green} from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Box} from '@material-ui/core';
import {CircularProgress} from '@material-ui/core';

const preloadDiff = (value) => {
  return value === 0 ? <CircularProgress size={20}/> : `${value}%`;
};

const DifferenceComponent = (props) => {
  const {difference, classes} = props;
  const {priceDiff, percenttDiff} = difference;
  return (
      <Box className={classes}>
        <div>Difference</div>
        {Math.sign(priceDiff) !== 1 || 0 ?
            <>
              <div>{preloadDiff(percenttDiff)} <ArrowUpwardSharpIcon
                  fontSize="large"
                  style={{color: green[500]}}/>
              </div>
              <div><p>{`+${Math.abs(priceDiff)}`}</p></div>
            </>
            :
            <>
              <div>{preloadDiff(percenttDiff)}<ArrowDownwardIcon
                  fontSize="large"
                  color="error"/>
              </div>
              <div><p>{`-${priceDiff}`}</p></div>
            </>
        }
      </Box>

  );
};
export default DifferenceComponent;