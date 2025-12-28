
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (id: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isWishlisted, onToggleWishlist }) => {
  return (
    <div 
      className="group cursor-pointer animate-[fadeIn_0.6s_ease-out]"
      onClick={() => onClick(product.id)}
    >
      <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-[24px] bg-[#f5f5f6] transition-all duration-700 hover:shadow-2xl">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Hover Overlay: Product Status / Quick Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Wishlist Button */}
        <button 
          className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${isWishlisted ? 'bg-white text-[#ff3f6c] shadow-xl scale-110' : 'bg-white/80 text-[#282c3f] shadow-md hover:scale-110 hover:bg-white'}`}
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>

        {/* Discount Label */}
        {product.discount && (
           <div className="absolute bottom-4 left-4 bg-[#ff3f6c] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
             {product.discount}
           </div>
        )}
      </div>

      <div className="space-y-1.5 px-1">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-black text-black tracking-tight uppercase">{product.brand}</h3>
          <span className="text-sm font-black text-black">₹{product.price}</span>
        </div>
        <p className="text-[12px] text-[#535766] font-semibold truncate opacity-80">{product.name}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[11px] text-[#94969f] line-through font-medium">₹{product.orgPrice}</span>
          <span className="w-1 h-1 bg-[#eaeaec] rounded-full" />
          <span className="text-[11px] text-[#03a685] font-black uppercase tracking-tighter">Verified Luxe</span>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default ProductCard;
