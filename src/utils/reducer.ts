import { ProductType } from '../types';

const appReducer = (currentState, action) => {
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default appReducer;
