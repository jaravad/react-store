import {
  Routes,
  Route,
  Outlet,
  BrowserRouter as Router,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Products from './views/Products';
import AddProduct from './views/AddProduct';
import Cart from './views/Cart';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Products />} />
        </Routes>
      </Router>
      <Outlet />
    </>
  );
}

export default App;
