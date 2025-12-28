
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface CatalogProps {
  products: Product[];
  onSelectProduct: (id: number) => void;
  wishlistIds: number[];
  onToggleWishlist: (id: number) => void;
}

const Catalog: React.FC<CatalogProps> = ({ products, onSelectProduct, wishlistIds, onToggleWishlist }) => {
  const [activeDivision, setActiveDivision] = useState<'All' | 'Men' | 'Unisex'>('All');
  const [priceFilter, setPriceFilter] = useState<[number, number] | null>(null);
  
  const divisions: ('All' | 'Men' | 'Unisex')[] = ['All', 'Men', 'Unisex'];
  const priceRanges = [
    { label: 'All Prices', value: null },
    { label: 'Under ₹2000', value: [0, 2000] as [number, number] },
    { label: '₹2000 - ₹4000', value: [2000, 4000] as [number, number] },
    { label: 'Over ₹4000', value: [4000, 99999] as [number, number] },
  ];

  const filteredProducts = useMemo(() => {
    let result = activeDivision === 'All' ? products : products.filter(p => p.category === activeDivision);
    if (priceFilter) {
      result = result.filter(p => p.price >= priceFilter[0] && p.price <= priceFilter[1]);
    }
    return result;
  }, [products, activeDivision, priceFilter]);

  const menProducts = useMemo(() => filteredProducts.filter(p => p.category === 'Men'), [filteredProducts]);
  const unisexProducts = useMemo(() => filteredProducts.filter(p => p.category === 'Unisex'), [filteredProducts]);

  const renderProductGrid = (items: Product[]) => (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
      {items.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={onSelectProduct}
          isWishlisted={wishlistIds.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );

  const renderSectionHeader = (title: string, count: number) => (
    <div className="flex items-center justify-between mb-10 mt-6">
      <div className="flex items-baseline gap-6">
        <h2 className="text-3xl font-black uppercase tracking-[6px] text-black">{title} Selection</h2>
        <span className="text-[10px] font-black uppercase text-[#94969f] tracking-widest bg-[#f5f5f6] px-3 py-1 rounded-full">{count} Objects</span>
      </div>
      <div className="h-0.5 flex-1 bg-[#eaeaec] mx-8 hidden md:block" />
      <button 
        onClick={() => setActiveDivision(title as any)}
        className="text-[10px] font-black uppercase tracking-widest text-[#ff3f6c] hover:underline"
      >
        Expand Collection
      </button>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-fadeIn">
      {/* Sidebar Filters */}
      <aside className="hidden lg:block w-[280px] shrink-0 sticky top-[110px] h-fit">
        <div className="space-y-12">
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[3px] mb-8 text-black/40">Division Nodes</h4>
            <div className="space-y-4">
              {divisions.map(div => (
                <button
                  key={div}
                  onClick={() => setActiveDivision(div)}
                  className={`flex items-center gap-4 w-full text-sm font-extrabold transition-all group ${activeDivision === div ? 'text-[#ff3f6c]' : 'text-[#282c3f] hover:text-black'}`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all ${activeDivision === div ? 'bg-[#ff3f6c] scale-125' : 'bg-[#eaeaec] group-hover:bg-black'}`} />
                  {div}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[3px] mb-8 text-black/40">Price Thresholds</h4>
            <div className="space-y-4">
              {priceRanges.map(range => (
                <button
                  key={range.label}
                  onClick={() => setPriceFilter(range.value)}
                  className={`flex items-center gap-4 w-full text-sm font-extrabold transition-all group ${JSON.stringify(priceFilter) === JSON.stringify(range.value) ? 'text-[#ff3f6c]' : 'text-[#282c3f] hover:text-black'}`}
                >
                  <div className={`w-2 h-2 rounded-full transition-all ${JSON.stringify(priceFilter) === JSON.stringify(range.value) ? 'bg-[#ff3f6c] scale-125' : 'bg-[#eaeaec] group-hover:bg-black'}`} />
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-[#eaeaec]">
             <div className="bg-[#1a0f0f] p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <span className="text-[10px] font-black uppercase text-[#ff3f6c] block mb-3 tracking-widest">Luxe Notice</span>
                <p className="text-xs font-bold leading-relaxed text-white/60">Season End matrix is active. High-density textile drops currently discounted by 30%.</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Catalog Flow */}
      <div className="flex-1">
        {/* Mobile Filters Scroll */}
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto no-scrollbar mb-10 pb-4">
          {divisions.map(div => (
            <button
              key={div}
              onClick={() => setActiveDivision(div)}
              className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeDivision === div ? 'bg-black text-white shadow-xl' : 'bg-[#f5f5f6] text-[#282c3f]'}`}
            >
              {div}
            </button>
          ))}
        </div>

        {activeDivision === 'All' ? (
          <div className="space-y-24">
            {menProducts.length > 0 && (
              <section className="animate-[fadeIn_0.8s_ease-out]">
                {renderSectionHeader('Men', menProducts.length)}
                {renderProductGrid(menProducts)}
              </section>
            )}

            {unisexProducts.length > 0 && (
              <section className="animate-[fadeIn_1s_ease-out]">
                {renderSectionHeader('Unisex', unisexProducts.length)}
                {renderProductGrid(unisexProducts)}
              </section>
            )}
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black uppercase tracking-[6px] text-black">{activeDivision} Selection</h2>
              <div className="text-xs font-black text-black/30 tracking-widest uppercase">
                Showing {filteredProducts.length} Objects
              </div>
            </div>
            {renderProductGrid(filteredProducts)}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center bg-[#fcfcfd] rounded-[40px] border-2 border-dashed border-[#eaeaec]">
            <h3 className="text-2xl font-black uppercase tracking-[6px] text-black/10">No matching signals.</h3>
            <button 
              onClick={() => {setActiveDivision('All'); setPriceFilter(null);}} 
              className="mt-6 px-10 py-4 bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-[#ff3f6c] transition-all"
            >
              Reset Protocol
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default Catalog;
