import { Category, Product, Review, SpecialMenuItem } from './types';

// Import our custom generated high-quality assets
import moltenCookie from './assets/images/molten_cookie_1784012595675.jpg';
import stackedDonuts from './assets/images/stacked_donuts_1784012607254.jpg';
import bakersWorking from './assets/images/bakers_working_1784012621432.jpg';
import footerCookies from './assets/images/footer_cookies_1784012632481.jpg';

export { moltenCookie, stackedDonuts, bakersWorking, footerCookies };

export const PRODUCTS: Product[] = [
  // Cupcakes
  {
    id: 'cup-1',
    name: 'Velvet Berry Cupcake',
    price: 3.49,
    rating: 4.9,
    reviewsCount: 124,
    category: Category.CUPCAKES,
    description: 'A rich red velvet cake base topped with silky cream cheese frosting and fresh organic raspberries.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
  },
  {
    id: 'cup-2',
    name: 'Classic Vanilla Swirl',
    price: 2.99,
    rating: 4.7,
    reviewsCount: 86,
    category: Category.CUPCAKES,
    description: 'Fluffy Madagascar vanilla bean cake topped with our signature whipped vanilla buttercream and golden sparkles.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'cup-3',
    name: 'Chocolate Fudge Delight',
    price: 3.25,
    rating: 4.8,
    reviewsCount: 142,
    category: Category.CUPCAKES,
    description: 'Deep Belgian chocolate cupcake topped with a rich dark chocolate fudge frosting and fine cocoa dust.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400',
  },

  // Brownies
  {
    id: 'brown-1',
    name: 'Triple Chocolate Brownie',
    price: 3.99,
    rating: 4.9,
    reviewsCount: 195,
    category: Category.BROWNIES,
    description: 'Decadent, fudgy brownie baked with three distinct varieties of Swiss chocolate chunks and a glossy crust.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
  },
  {
    id: 'brown-2',
    name: 'Salted Caramel Brownie',
    price: 4.25,
    rating: 4.8,
    reviewsCount: 112,
    category: Category.BROWNIES,
    description: 'Our signature fudgy chocolate brownie marbled with rich house-made sea salted caramel ribbons.',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'brown-3',
    name: 'Walnut Chocolate Chunk',
    price: 3.99,
    rating: 4.6,
    reviewsCount: 94,
    category: Category.BROWNIES,
    description: 'Classic rich brownie loaded with roasted California walnuts and dark chocolate chunks for the perfect crunch.',
    image: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80&w=400',
  },

  // Doughnuts
  {
    id: 'donut-1',
    name: 'Cream Doughnut',
    price: 2.49,
    rating: 4.8,
    reviewsCount: 178,
    category: Category.DOUGHNUTS,
    description: 'Soft, sugar-dusted yeast doughnut packed with velvety fresh vanilla pastry cream and topped with sugar powder.',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400',
    isSpecial: true,
  },
  {
    id: 'donut-2',
    name: 'Pink Strawberry Glazed',
    price: 2.25,
    rating: 4.7,
    reviewsCount: 215,
    category: Category.DOUGHNUTS,
    description: 'Classic yeast doughnut dipped in a sweet strawberry puree glaze and finished with colorful rainbow sprinkles.',
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'donut-3',
    name: 'Double Chocolate Glazed',
    price: 2.49,
    rating: 4.9,
    reviewsCount: 167,
    category: Category.DOUGHNUTS,
    description: 'Rich chocolate cake doughnut covered with a thick warm Belgian milk chocolate glaze and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?auto=format&fit=crop&q=80&w=400',
  },

  // Pastries
  {
    id: 'pastry-1',
    name: 'Almond Croissant',
    price: 3.75,
    rating: 4.9,
    reviewsCount: 230,
    category: Category.PASTRIES,
    description: 'Twice-baked buttery puff pastry filled with sweet almond frangipane cream and topped with toasted almond slices.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'pastry-2',
    name: 'Strawberry Tart',
    price: 4.50,
    rating: 4.8,
    reviewsCount: 110,
    category: Category.PASTRIES,
    description: 'A crisp sweet pastry shell filled with rich vanilla bean custard and topped with fresh sliced glazed strawberries.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'pastry-3',
    name: 'Raspberry Danish',
    price: 3.99,
    rating: 4.7,
    reviewsCount: 98,
    category: Category.PASTRIES,
    description: 'Flaky, buttery laminated danish pastry centered with sweet cream cheese and tart organic raspberry preserves.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
  },

  // Cookies
  {
    id: 'cookie-1',
    name: 'Giant Choco Chip Molten Cookie',
    price: 3.50,
    rating: 5.0,
    reviewsCount: 420,
    category: Category.COOKIES,
    description: 'Our world-famous giant chocolate chip cookie with a gooey, molten chocolate center that melts in your mouth.',
    image: moltenCookie,
  },
  {
    id: 'cookie-2',
    name: 'Oatmeal Raisin Cookie',
    price: 2.99,
    rating: 4.6,
    reviewsCount: 82,
    category: Category.COOKIES,
    description: 'Soft and chewy traditional cookie loaded with toasted rolled oats, sweet organic raisins, and a hint of warm cinnamon.',
    image: 'https://images.unsplash.com/photo-1558961309-dbdf71799f14?auto=format&fit=crop&q=80&w=400',
  },

  // Muffins
  {
    id: 'muffin-1',
    name: 'Blueberry Streusel Muffin',
    price: 3.15,
    rating: 4.8,
    reviewsCount: 154,
    category: Category.MUFFINS,
    description: 'Plump and sweet fresh blueberries baked inside a moist vanilla muffin, crowned with a crunchy brown sugar streusel.',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'muffin-2',
    name: 'Chocolate Chip Muffin',
    price: 2.99,
    rating: 4.7,
    reviewsCount: 110,
    category: Category.MUFFINS,
    description: 'Double chocolate muffin baked with dark chocolate chips and a tender crumb, perfect for sweet mornings.',
    image: 'https://images.unsplash.com/photo-1558724374-d792e6be40f6?auto=format&fit=crop&q=80&w=400',
  },
];

export const TODAY_SPECIALS: SpecialMenuItem[] = [
  {
    id: 'spec-1',
    name: 'Chocolate Brownie',
    price: 3.99,
    rating: 4.9,
    description: 'Decadent chocolate brownie topped with chocolate drizzle.',
    category: 'Brownies',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'spec-2',
    name: 'Cream Doughnut',
    price: 2.49,
    rating: 4.8,
    description: 'Yeast doughnut packed with rich vanilla pastry cream.',
    category: 'Doughnuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 'spec-3',
    name: 'Berry Cupcake',
    price: 3.49,
    rating: 4.9,
    description: 'Red velvet cupcake topped with raspberry cream.',
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=200',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Sarah Jenkins',
    role: 'Local Food Blogger',
    rating: 5,
    comment: 'The chocolate molten cookie is literally life-changing! Warm, gooey, and absolutely perfect. The customer service is always outstanding.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    date: '2 days ago',
  },
  {
    id: 'rev-2',
    name: 'Michael Chen',
    role: 'Loyal Customer',
    rating: 5,
    comment: 'I order their Fresh Baked daily goods for my office events. Everyone absolutely loves them, especially the Almond Croissant and the Pink Glazed Donuts!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    date: '1 week ago',
  },
  {
    id: 'rev-3',
    name: 'Sophia Rodriguez',
    role: 'Pastry Aficionado',
    rating: 5,
    comment: 'Exceptional craftsmanship! You can tell everything is baked from scratch with high-quality organic ingredients. Their velvet cupcakes are spectacular.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    date: '3 days ago',
  },
  {
    id: 'rev-4',
    name: 'David Thompson',
    role: 'Local Resident',
    rating: 5,
    comment: 'The best bakery in town. Period. Friendly staff, cozy ambiance, and delicious treats that remind me of home. My kids adore their berry muffins!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    date: '5 days ago',
  },
];
