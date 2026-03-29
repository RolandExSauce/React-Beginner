import { createContext, useContext, useState } from 'react';


export const ThemeContext = createContext('dark');

export default function ThemeProvider({ children }) {

  const [mode, setMode] = useState('light')
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );

}
ThemeProvider.context = ThemeContext;


export const useThemeContext = () =>  {
    return useContext(ThemeContext);
}