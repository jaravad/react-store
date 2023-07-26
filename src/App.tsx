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

const initialState = {
  products: data.products,
  cart: { items: [], total: 0 },
};

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
