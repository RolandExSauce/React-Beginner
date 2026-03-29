import React, { useContext } from 'react'
import { ThemeContext, useThemeContext } from './context/ThemeContext';



const Child = () => {

  const { mode: modeCustom  } = useThemeContext();
  const { mode  } = useContext(ThemeContext);
  console.log("Context in child: ", mode)

  return (
    <div style={{ backgroundColor:  mode === 'dark' ?
    
    'black' : 'grey'
     , marginTop: 100, height: 200 }}>


<h1>Hello from Child</h1>


    </div>
  )
}
export default Child




// export const obj = {
// name: "Roland",
// };