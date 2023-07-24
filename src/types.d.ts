export interface ProductCardProps {
  name: string;
  price: number;
  amount: number;
}

export interface ProductType {
  name: string;
  price: number;
  amount: number;
  id: number;
}

export interface AddProductType {
  name: string;
  price: number | string;
  amount: number | string;
}
