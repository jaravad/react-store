import {
  Routes,
  Route,
  Outlet,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useReducer } from 'react';
import { Toaster } from 'react-hot-toast';
import { StoreContext, StoreDispatchContext } from './utils/contexts';
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

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  return (
    <StoreContext.Provider value={store}>
      <StoreDispatchContext.Provider value={dispatch}>
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
      </StoreDispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export default App;
