export interface ProductCardProps {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export interface ProductType {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export interface AddProductType {
  name: string;
  price: number;
  amount: number;
}

export interface CartItem extends ProductType {
  amount: number;
}

export interface AppStateType {
  products: Array<Products>;
  cart: {
    items: Array<CartItem>;
    total: number;
  };
}
