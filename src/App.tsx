import {
  Routes,
  Route,
  Outlet,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  DarkModeContext,
  StoreContext,
  StoreDispatchContext,
} from './utils/contexts';
import appReducer from './utils/reducer';
import data from './data.json';

import NavBar from './components/NavBar';
import Products from './views/Products';
import AddProduct from './views/AddProduct';
import Cart from './views/Cart';
import { AppStateType } from './types';

let initialState: AppStateType;
const defaultProducts = data.products;
const defaultCart = { items: [], total: 0 };
const storedProducts = JSON.parse(localStorage.getItem('products'));
const storedCart = JSON.parse(localStorage.getItem('cart'));

initialState = {
  products: storedProducts ? storedProducts : defaultProducts,
  cart: storedCart ? storedCart : defaultCart,
};

if (!storedProducts) {
  localStorage.setItem('products', JSON.stringify(defaultProducts));
}
if (!storedCart) {
  localStorage.setItem('cart', JSON.stringify(defaultCart));
}
const isDarkMode = Boolean(JSON.parse(localStorage.getItem('darkMode')));

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  };

  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          <Router>
            <Toaster position="top-center" reverseOrder={false} />
            <NavBar />
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Products />} />
            </Routes>
          </Router>
          <Outlet />
        </DarkModeContext.Provider>
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;
