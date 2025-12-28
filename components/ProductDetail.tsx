
import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToBag: (p: Product, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  relatedProducts: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onClose, 
  onAddToBag, 
  isWishlisted, 
  onToggleWishlist,
  relatedProducts 
}) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[6000] bg-white animate-[slideUp_0.6s_cubic-bezier(0.19,1,0.22,1)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#eaeaec] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#f5f5f6] flex items-center justify-center hover:rotate-90 transition-transform duration-500"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <span className="text-xs font-black uppercase tracking-[3px]">Product Architecture</span>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 p-6 lg:p-12">
          
          {/* Gallery */}
          <div className="flex-1 lg:max-w-[650px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.images.map((img, i) => (
                <div key={i} className={`rounded-[32px] overflow-hidden shadow-lg ${i === 0 ? 'md:col-span-2' : ''}`}>
                  <img src={img} className="w-full h-full object-cover aspect-[3/4]" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="flex-1 lg:sticky lg:top-12 h-fit">
            <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tighter text-black">{product.brand}</h1>
            <p className="text-xl md:text-2xl text-[#535766] font-medium mb-10">{product.name}</p>

            <div className="py-8 border-y border-[#eaeaec] mb-10">
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="text-4xl font-black text-black">₹{product.price}</span>
                <span className="text-2xl text-[#94969f] line-through font-light">₹{product.orgPrice}</span>
                <span className="text-2xl text-[#ff905a] font-black">({product.discount})</span>
              </div>
              <p className="text-[11px] font-black text-[#03a685] mt-4 tracking-widest uppercase">Inclusive of all galactic taxes</p>
            </div>

            {/* Size Selector */}
            <div className="mb-12">
              <label className="block text-[11px] font-black uppercase tracking-[2px] mb-6">Select Specification Size</label>
              <div className="flex flex-wrap gap-4">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[60px] h-[60px] rounded-full border-2 flex items-center justify-center text-sm font-black transition-all ${selectedSize === size ? 'border-[#ff3f6c] text-[#ff3f6c] bg-[#ff3f6c]/5 shadow-xl scale-110' : 'border-[#eaeaec] text-[#282c3f] hover:border-[#ff3f6c]'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-lg text-[#535766] leading-relaxed mb-12 font-medium">
              {product.desc}
            </p>

            {/* Actions */}
            <div className="flex gap-4">
              <button 
                onClick={() => onAddToBag(product, selectedSize)}
                className="flex-[2] h-16 bg-[#ff3f6c] text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-[#ff3f6c]/30 hover:brightness-110 active:scale-95 transition-all"
              >
                Authorize Bag
              </button>
              <button 
                onClick={() => onToggleWishlist(product.id)}
                className={`flex-1 h-16 rounded-2xl border-2 flex items-center justify-center transition-all ${isWishlisted ? 'border-[#ff3f6c] text-[#ff3f6c] bg-[#ff3f6c]/5' : 'border-[#eaeaec] text-black hover:border-[#ff3f6c]'}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-[#eaeaec]">
               <h4 className="text-xs font-black uppercase tracking-widest mb-6">Vanguard Intel</h4>
               <div className="bg-[#f5f5f6] p-8 rounded-[32px] flex gap-6 shadow-inner">
                  <div className="w-12 h-12 rounded-full bg-[#282c3f] text-white flex items-center justify-center font-black shrink-0">AV</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-black text-black uppercase">Apurv Vala</span>
                      <span className="bg-[#03a685] text-white text-[8px] font-black px-2 py-0.5 rounded">AUTHENTIC</span>
                    </div>
                    <p className="text-sm text-[#535766] italic leading-relaxed font-medium">
                      "Textile matrix density is exceptional. Elite silhouette capture and athletic resilience. Optimized for longevity."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <h2 className="text-2xl font-black uppercase tracking-[4px] mb-12 text-center">Synchronized Drops</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <div key={p.id} className="cursor-pointer group" onClick={() => { onClose(); setTimeout(() => {}, 100); }}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-4">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-xs font-black truncate">{p.name}</h4>
                <p className="text-sm font-black text-[#ff3f6c] mt-1">₹{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default ProductDetail;
