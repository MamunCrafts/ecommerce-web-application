export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  tags?: ('hot' | 'flash')[];
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
    tags: ['hot'],
  },
  {
    id: 2,
    name: "Smart Watch Series 7",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Stay connected and track your fitness with the latest smart watch.",
    tags: ['flash'],
  },
  {
    id: 3,
    name: "4K Ultra HD Monitor",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Immerse yourself in stunning visuals with our 4K monitor.",
  },
  {
    id: 4,
    name: "Bluetooth Portable Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Take your music anywhere with this powerful portable speaker.",
    tags: ['hot', 'flash'],
  },
  {
    id: 13,
    name: "Pro Gaming Mouse",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Precision tracking and ergonomic design for gamers.",
  },
  {
    id: 14,
    name: "Mechanical Keyboard RGB",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Tactile switches and customizable lighting.",
    tags: ['hot'],
  },
  {
    id: 15,
    name: "Noise-Canceling Earbuds",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Compact design with powerful sound isolation.",
  },
  {
    id: 16,
    name: "Drone with 4K Camera",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Capture aerial footage in stunning detail.",
    tags: ['flash'],
  },
  {
    id: 17,
    name: "Virtual Reality Headset",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1592478411213-61535fddbadf?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Immerse yourself in new worlds with our VR headset.",
  },
  {
    id: 18,
    name: "Mirrorless Camera",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Professional quality photography in a compact body.",
  },
  {
    id: 19,
    name: "Tablet Pro 11-inch",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Powerful performance for work and creativity.",
  },
  {
    id: 20,
    name: "Smart Home Hub",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Control your entire home with your voice.",
  },
  {
    id: 21,
    name: "Portable Power Bank",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Keep your devices charged on the go.",
  },
  {
    id: 22,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1596742578443-7682e3b5a34c?w=500&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Convenient charging without the cables.",
  },

  // Fashion
  {
    id: 5,
    name: "Classic Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028919-ac66c5f85955?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Timeless style with this genuine leather jacket.",
    tags: ['hot'],
  },
  {
    id: 6,
    name: "Running Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Comfort and performance for your daily runs.",
  },
  {
    id: 7,
    name: "Designer Sunglasses",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Protect your eyes in style with these designer shades.",
    tags: ['flash'],
  },
  {
    id: 8,
    name: "Casual Denim Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Perfect fit denim for everyday wear.",
  },
  {
    id: 23,
    name: "Cotton Crew Neck T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Soft and breathable essential for your wardrobe.",
  },
  {
    id: 24,
    name: "Leather Crossbody Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Stylish and functional bag for daily use.",
    tags: ['hot'],
  },
  {
    id: 25,
    name: "Minimalist Watch",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Elegant timepiece for any occasion.",
  },
  {
    id: 26,
    name: "Summer Floral Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Light and airy dress perfect for warmer days.",
    tags: ['flash'],
  },
  {
    id: 27,
    name: "Wool Blend Scarf",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Keep warm in style with this soft scarf.",
  },
  {
    id: 28,
    name: "Canvas Backpack",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Durable and spacious for all your adventures.",
  },
  {
    id: 29,
    name: "Ankle Boots",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Trendy boots that pair well with anything.",
  },
  {
    id: 30,
    name: "Wide Brim Hat",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Statement accessory for a chic look.",
  },
  {
    id: 31,
    name: "Silk Tie",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Add a touch of sophistication to your suit.",
  },
  {
    id: 32,
    name: "Sports Hoodie",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=60",
    category: "Fashion",
    description: "Cozy and comfortable for workouts or lounging.",
  },

  // Home & Living
  {
    id: 9,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Brighten your workspace with this sleek, modern lamp.",
    tags: ['hot'],
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
    tags: ['flash'],
  },
  {
    id: 12,
    name: "Abstract Wall Art",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1549887552-93f954d1d960?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Modern art piece to elevate your living room decor.",
  },
  {
    id: 33,
    name: "Modern Grey Sofa",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Comfortable and stylish centerpiece for your living room.",
    tags: ['hot'],
  },
  {
    id: 34,
    name: "Velvet Accent Chair",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Luxurious seating with a pop of color.",
  },
  {
    id: 35,
    name: "Geometric Rug",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1575414003502-942360b299e9?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Add texture and pattern to your floors.",
  },
  {
    id: 36,
    name: "Decorative Throw Pillow",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Soft and stylish accent for your sofa or bed.",
  },
  {
    id: 37,
    name: "Wooden Coffee Table",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Sturdy and elegant table for your living space.",
  },
  {
    id: 38,
    name: "Glass Flower Vase",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581783342308-f792ca11df53?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Perfect for displaying your favorite blooms.",
    tags: ['flash'],
  },
  {
    id: 39,
    name: "Wall Clock",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Keep time in style with this minimalist clock.",
  },
  {
    id: 40,
    name: "Cozy Throw Blanket",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1579656592043-a20e25a4aa85?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Warm and soft blanket for chilly evenings.",
  },
  {
    id: 41,
    name: "Potted Succulent",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Low-maintenance plant to green up your space.",
  },
  {
    id: 42,
    name: "Wooden Bookshelf",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&auto=format&fit=crop&q=60",
    category: "Home & Living",
    description: "Display your books and treasures.",
  }
];

export function getProductsByCategory(): Record<string, Product[]> {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
}

export function getHotProducts(): Product[] {
  return products.filter((product) => product.tags?.includes('hot'));
}

export function getFlashProducts(): Product[] {
  return products.filter((product) => product.tags?.includes('flash'));
}
