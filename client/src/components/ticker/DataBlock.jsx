import {Box} from '@material-ui/core';

const DataTickerBlock = (props) => {
  const {data , classes} = props;
  const currentData = new Date(data);
  const [day, time] = currentData.toLocaleString().split(',');
  return (

        <Box className={classes}>
          <div><p>Data</p></div>
          <div><p>{day}</p></div>
          <div><p>{time}</p></div>
        </Box>
  );
};

export default DataTickerBlock;