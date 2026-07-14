export enum Category {
  CUPCAKES = 'Cupcakes',
  BROWNIES = 'Brownies',
  DOUGHNUTS = 'Doughnuts',
  PASTRIES = 'Pastries',
  COOKIES = 'Cookies',
  MUFFINS = 'Muffins',
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: Category;
  description: string;
  image: string;
  isNew?: boolean;
  isSpecial?: boolean;
}

export interface SpecialMenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
