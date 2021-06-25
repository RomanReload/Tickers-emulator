import './App.css';
import {useDispatch} from 'react-redux';
import {FETCH_TICKETS_DATA} from './saga/saga';
import {useEffect} from 'react';
import TickersBlock from './components/ticker/TickersMain';
import HeaderBlock from './components/Header/MainHeader';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: FETCH_TICKETS_DATA});

  }, [dispatch]);
  return (
      <>
        <HeaderBlock/>
        <main><TickersBlock/></main>
      </>
  );
};

export default App;
