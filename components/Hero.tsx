
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] md:h-[480px] bg-gradient-to-br from-[#1a0f0f] to-[#2d1b1b] rounded-[32px] md:rounded-[40px] mb-12 overflow-hidden flex items-center px-8 md:px-16 shadow-2xl border border-white/5">
      {/* Decorative Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-[#ff3f6c]/30 to-transparent blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-[#ff905a]/10 to-transparent blur-[80px] rounded-full" />
      
      <div className="relative z-10 text-white max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block bg-[#ff3f6c] text-[11px] md:text-[13px] font-black uppercase tracking-[3px] px-5 py-2.5 rounded-full shadow-lg shadow-[#ff3f6c]/40 border border-white/20">
            Christmas Special
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">SEASON END DROPS</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
          HOLIDAY <br className="hidden md:block" /> LUXE.
        </h1>
        
        <p className="text-base md:text-xl text-white/80 font-light mb-12 max-w-md leading-relaxed">
          The ultimate curation of Shirts & Tees for the season's finale. <br />
          <span className="text-white font-black">Flat 30% OFF</span> across the matrix.
        </p>
        
        <div className="flex items-center gap-6">
          <button className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-[#ff3f6c] hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
            Claim Offer
          </button>
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">Ending In</span>
            <span className="text-sm font-black text-white uppercase tabular-nums">12 : 45 : 09</span>
          </div>
        </div>
      </div>

      {/* Holiday Decor Overlay */}
      <div className="absolute top-0 right-0 p-10 opacity-30 pointer-events-none hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
          <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
        </svg>
      </div>

      {/* Product Silhouette Decoration */}
      <div className="absolute bottom-[-5%] right-[5%] w-[35%] h-[100%] opacity-40 pointer-events-none hidden xl:block">
        <img 
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800" 
          className="w-full h-full object-cover grayscale mix-blend-overlay brightness-125"
          alt="Luxe Shirt Decoration"
        />
      </div>
    </div>
  );
};

export default Hero;
