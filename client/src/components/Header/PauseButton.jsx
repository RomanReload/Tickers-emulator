import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {FETCH_TICKETS_DATA} from '../../saga/saga';
import AlarmIcon from '@material-ui/icons/Alarm';

export let server = true;
const PauseButton = () => {
  const dispatch = useDispatch();
  const [serverRun, setServerRun] = useState(true);
  server = serverRun;
  const handlePause = () => {
    if (server === false) {
      setServerRun(!serverRun);
      dispatch({type: FETCH_TICKETS_DATA});
    }
    setServerRun(!serverRun);

  };
  return (
      <Button startIcon={<AlarmIcon/>} onClick={handlePause} variant="contained"
              color={server ? 'primary' : 'default'}>{server ?
          'Server Pause' :
          'Server Run'}</Button>
  );
};
export default PauseButton;