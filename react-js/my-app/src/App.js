import { useState, useContext } from 'react';
import Child from './Child'
import './App.css';
import { ThemeContext } from './context/ThemeContext';


function App() {


  const { setMode  } = useContext(ThemeContext);


  //TODOs left:

  // useCallback, useMemo, useReducer, custom hooks
  //for fetching: tanstack query/axios
  //Styling: UI frameworks, e.g. Chakra UI


  return (
    <div >
    <button onClick={() => { setMode((prev) =>  prev === 'dark' ? 'light' : 'dark'  ) } }   >Toggle System Mode </button>
    <Child />
    </div>
  );
}
export default App;
