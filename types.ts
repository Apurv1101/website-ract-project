
export interface Product {
  id: number;
  brand: string;
  name: string;
  category: string;
  price: number;
  orgPrice: number;
  img: string;
  images: string[];
  desc: string;
  discount: string;
}

export interface CartItem extends Product {
  cartId: string;
  selectedSize: string;
}

export interface Order {
  id: string;
  items: Product[];
  total: number;
  date: string;
  status: 'Ordered' | 'Confirmed' | 'Shipped' | 'Delivered';
  customer: string;
  address: string;
}

export type ViewType = 'catalog' | 'wishlist' | 'orders' | 'profile';
