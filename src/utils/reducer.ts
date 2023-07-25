import { getCartTotal } from '../utils';
import { AppStateType, ProductType } from '../types';

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
      return {
        ...currentState,
        products: [...currentState.products, { ...action.payload, id: newId }],
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
      return {
        ...currentState,
        cart: { items: updatedItems, total: newTotal },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default appReducer;
