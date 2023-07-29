import { useReducer, useState } from 'react';
import {
  StoreContext,
  StoreDispatchContext,
  DarkModeContext,
} from '../utils/contexts';
import appReducer from '../utils/reducer';

const TestProviders = ({ children, initialStore, initialDarkMode }) => {
  const [state, dispatch] = useReducer(appReducer, initialStore);
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  };

  return (
    <StoreContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          {children}
        </DarkModeContext.Provider>
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
};

export default TestProviders;
