import {Input, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SEARCH_LIST} from '../../store/reducer/reducers';

const MainInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch({type: SEARCH_LIST, payload: e.target.value});
  };
  return (
      <Input
          value={value}
          onChange={handleChange}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color={'primary'}/>
            </InputAdornment>
          }
      />
  );
};

export default MainInput;