
import { Product } from './types';

export const PRODUCTS: Product[] = [
  // MEN CATEGORY - SHIRTS & T-SHIRTS
  { 
    id: 101, 
    brand: "Stream & Dream", 
    name: "Heritage Pima Cotton Tee", 
    category: "Men", 
    price: 1899, 
    orgPrice: 2499, 
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800", 
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800"
    ], 
    desc: "Handpicked long-staple Pima cotton for an elite silhouette. Engineered for performance and luxury endurance.", 
    discount: "24% OFF" 
  },
  { 
    id: 102, 
    brand: "Stream & Dream", 
    name: "Oxford Master Button-Down", 
    category: "Men", 
    price: 2999, 
    orgPrice: 3999, 
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800", 
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800", 
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=800"
    ], 
    desc: "Crisp, architectural Oxford weave for professional dominance. Features refined collar and cuff architecture.", 
    discount: "25% OFF" 
  },
  { 
    id: 103, 
    brand: "S&D Luxury", 
    name: "Indigo Selvedge Armor Shirt", 
    category: "Men", 
    price: 4999, 
    orgPrice: 6499, 
    img: "https://images.unsplash.com/photo-1550910100-348633c5e87a?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1550910100-348633c5e87a?auto=format&fit=crop&q=80&w=800"], 
    desc: "Raw Indigo selvedge denim built to chronicle your journey through decades. The armor of modern explorers.", 
    discount: "23% OFF" 
  },
  { 
    id: 104, 
    brand: "Stream & Dream", 
    name: "Void Essential Black Tee", 
    category: "Men", 
    price: 1599, 
    orgPrice: 1999, 
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"], 
    desc: "A pure obsidian cotton tee with a heavy drop. The foundation of every minimalist wardrobe.", 
    discount: "20% OFF" 
  },

  // UNISEX CATEGORY - SHIRTS & T-SHIRTS
  { 
    id: 201, 
    brand: "S&D Labs", 
    name: "Aura Oversized Unisex Tee", 
    category: "Unisex", 
    price: 2499, 
    orgPrice: 3200, 
    img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800"], 
    desc: "A gender-neutral silhouette with a relaxed aura. Premium heavy-weight cotton designed for everyone.", 
    discount: "22% OFF" 
  },
  { 
    id: 202, 
    brand: "S&D Labs", 
    name: "Linear Stripe Unisex Shirt", 
    category: "Unisex", 
    price: 3199, 
    orgPrice: 3999, 
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800"], 
    desc: "Crisp linen-blend shirt with architectural stripes. A versatile piece that defies gender boundaries.", 
    discount: "20% OFF" 
  },
  { 
    id: 203, 
    brand: "Stream & Dream", 
    name: "Zenith Minimalist Tee", 
    category: "Unisex", 
    price: 1299, 
    orgPrice: 1699, 
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800"], 
    desc: "Ultra-soft cotton blend with a tailored yet breathable fit. Designed for ultimate versatility.", 
    discount: "23% OFF" 
  },
  { 
    id: 204, 
    brand: "S&D Retro", 
    name: "Classic Pique Polo", 
    category: "Unisex", 
    price: 2199, 
    orgPrice: 2799, 
    img: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800", 
    images: ["https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800"], 
    desc: "Heritage sports knit with performance resilience. Sharp contrast details for active elegance.", 
    discount: "21% OFF" 
  }
];
