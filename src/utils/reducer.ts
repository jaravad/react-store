import { getCartTotal } from '../utils';
import { AppStateType, ProductType } from '../types';
import toast from 'react-hot-toast';

const appReducer = (currentState: AppStateType, action) => {
  switch (action.type) {
    case 'addProduct': {
      const currentProducts = currentState.products;
      const newId =
        currentProducts.length > 0
          ? Math.max(
              ...currentProducts.map((product: ProductType) => product.id)
            ) + 1
          : 1;
      const updatedProducts = [
        ...currentProducts,
        { ...action.payload, id: newId },
      ];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      toast.success('Producto añadido');
      return {
        ...currentState,
        products: updatedProducts,
      };
    }
    case 'addToCart': {
      const currentCartItems = currentState.cart.items;
      let updatedItems = [];
      let newTotal: number;
      if (currentCartItems.length === 0) {
        updatedItems.push({ ...action.payload, amount: 1 });
        newTotal = getCartTotal(updatedItems);
      } else {
        const index = currentCartItems.findIndex((item) => {
          return item.id === action.payload.id;
        });
        if (index < 0) {
          updatedItems = [
            ...currentCartItems,
            { ...action.payload, amount: 1 },
          ];
          newTotal = getCartTotal(updatedItems);
        } else {
          const productInCart = currentCartItems[index];
          const productAmount = currentState.products.find((product) => {
            return product.id === productInCart.id;
          }).amount;
          updatedItems = [...currentCartItems];
          if (productAmount > productInCart.amount) {
            updatedItems[index] = {
              ...updatedItems[index],
              amount: updatedItems[index].amount + 1,
            };
          }
          newTotal = getCartTotal(updatedItems);
        }
      }
      localStorage.setItem(
        'cart',
        JSON.stringify({ items: updatedItems, total: newTotal })
      );
      toast.success('Producto añadido al carrito');
      return {
        ...currentState,
        cart: { items: updatedItems, total: newTotal },
      };
    }
    case 'deleteFromCart': {
      const currentCartItems = currentState.cart.items;
      const updatedItems = currentCartItems.filter(
        (item) => item.id !== action.payload
      );
      const newTotal = getCartTotal(updatedItems);
      localStorage.setItem(
        'cart',
        JSON.stringify({ items: updatedItems, total: newTotal })
      );
      return {
        ...currentState,
        cart: { items: updatedItems, total: newTotal },
      };
    }
    case 'completePurchase': {
      const currentProducts = currentState.products;
      const updatedProducts = [...currentProducts];
      action.payload.forEach((productInCart) => {
        const index = currentProducts.findIndex(
          (product) => product.id === productInCart.id
        );
        const productToUpdate = currentProducts[index];
        productToUpdate.amount = productToUpdate.amount - productInCart.amount;
        updatedProducts[index] = productToUpdate;
      });
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      localStorage.setItem('cart', JSON.stringify({ items: [], total: 0 }));
      toast.success('Compra completada');
      return {
        products: updatedProducts,
        cart: { items: [], total: 0 },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default appReducer;
