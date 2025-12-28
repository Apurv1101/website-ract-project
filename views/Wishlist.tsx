
import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface WishlistProps {
  products: Product[];
  onSelectProduct: (id: number) => void;
  onToggleWishlist: (id: number) => void;
  onAddToBag: (p: Product) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ products, onSelectProduct, onToggleWishlist, onAddToBag }) => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[6px] mb-4">My Aesthetic Sanctuary</h2>
        <div className="h-1 w-20 bg-[#ff3f6c] mx-auto rounded-full" />
      </div>

      {products.length === 0 ? (
        <div className="py-24 text-center">
          <div className="mb-8 opacity-10 flex justify-center">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </div>
          <p className="text-xl font-black uppercase tracking-[4px] text-[#94969f] mb-10">Your sanctuary is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map(product => (
            <div key={product.id} className="relative">
              <ProductCard 
                product={product} 
                onClick={onSelectProduct}
                isWishlisted={true}
                onToggleWishlist={onToggleWishlist}
              />
              <button 
                onClick={(e) => { e.stopPropagation(); onAddToBag(product); }}
                className="mt-6 w-full h-12 bg-white border-2 border-[#282c3f] text-[#282c3f] font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-black hover:text-white transition-all shadow-md active:scale-95"
              >
                Authorize Bag
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
