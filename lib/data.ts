export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Experience pure sound with our premium noise-canceling headphones.",
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 399.00,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Stay connected and healthy with the latest smartwatch technology.",
  },
  {
    id: 3,
    name: "4K Action Camera",
    price: 199.50,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Capture life's best moments in stunning 4K resolution.",
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Tactile feedback and RGB lighting for the ultimate gaming experience.",
  },

  // Fashion
  {
    id: 5,
    name: "Classic Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "A timeless classic that goes with everything in your wardrobe.",
  },
  {
    id: 6,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Soft, breathable cotton for everyday comfort.",
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Elegant and functional, perfect for daily essentials.",
  },
  {
    id: 8,
    name: "Running Sneakers",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Lightweight and supportive for your daily runs.",
  },

  // Home & Living
  {
    id: 9,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Brighten your workspace with this sleek, modern lamp.",
  },
  {
    id: 10,
    name: "Ceramic Plant Pot",
    price: 24.50,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Add a touch of nature to your home with this handcrafted pot.",
  },
  {
    id: 11,
    name: "Scented Soy Candle",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Relaxing scents to create a cozy atmosphere.",
  },
  {
    id: 12,
    name: "Abstract Wall Art",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1549887552-93f954d1d960?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Modern art piece to elevate your living room decor.",
  }
];

export const getProductsByCategory = () => {
  const grouped: Record<string, Product[]> = {};
  products.forEach(product => {
    if (!grouped[product.category]) {
      grouped[product.category] = [];
    }
    grouped[product.category].push(product);
  });
  return grouped;
};
