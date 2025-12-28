
import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Order, ViewType } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import CartDrawer from './components/CartDrawer';
import Catalog from './views/Catalog';
import Wishlist from './views/Wishlist';
import Orders from './views/Orders';
import Profile from './views/Profile';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('catalog');
  const [bag, setBag] = useState<CartItem[]>(() => JSON.parse(localStorage.getItem('sd_bag') || '[]'));
  const [wishlistIds, setWishlistIds] = useState<number[]>(() => JSON.parse(localStorage.getItem('sd_wishlist') || '[]'));
  const [transmissions, setTransmissions] = useState<Order[]>(() => JSON.parse(localStorage.getItem('sd_transmissions') || '[]'));
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('sd_bag', JSON.stringify(bag));
  }, [bag]);

  useEffect(() => {
    localStorage.setItem('sd_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem('sd_transmissions', JSON.stringify(transmissions));
  }, [transmissions]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [searchQuery]);

  const toggleWishlist = (id: number) => {
    setWishlistIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const addToBag = (product: Product, size: string) => {
    const newItem: CartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`,
      selectedSize: size
    };
    setBag(prev => [...prev, newItem]);
    setIsCartOpen(true);
    setSelectedProductId(null);
  };

  const removeFromBag = (cartId: string) => {
    setBag(prev => prev.filter(item => item.cartId !== cartId));
  };

  const finalizeTransmission = (customer: string, address: string) => {
    const newTrans: Order = {
      id: 'ORD-' + Math.floor(Math.random() * 900000 + 100000),
      items: bag.map(item => ({ ...item })),
      total: bag.reduce((a, c) => a + c.price, 0),
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Ordered',
      customer,
      address
    };
    setTransmissions(prev => [newTrans, ...prev]);
    setBag([]);
    setCurrentView('orders');
    setIsCartOpen(false);
  };

  const renderView = () => {
    switch (currentView) {
      case 'catalog':
        return <Catalog products={filteredProducts} onSelectProduct={setSelectedProductId} wishlistIds={wishlistIds} onToggleWishlist={toggleWishlist} />;
      case 'wishlist':
        return <Wishlist products={PRODUCTS.filter(p => wishlistIds.includes(p.id))} onSelectProduct={setSelectedProductId} onToggleWishlist={toggleWishlist} onAddToBag={(p) => addToBag(p, 'M')} />;
      case 'orders':
        return <Orders orders={transmissions} />;
      case 'profile':
        return <Profile onSwitchView={setCurrentView} />;
      default:
        return <Catalog products={filteredProducts} onSelectProduct={setSelectedProductId} wishlistIds={wishlistIds} onToggleWishlist={toggleWishlist} />;
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[#ff3f6c] selection:text-white">
      <Header 
        bagCount={bag.length} 
        wishlistCount={wishlistIds.length} 
        onSwitchView={setCurrentView} 
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        currentView={currentView}
      />
      
      <main className="max-w-[1500px] mx-auto pt-[110px] pb-32 px-6 lg:px-12">
        {currentView === 'catalog' && searchQuery === '' && <Hero />}
        {renderView()}
      </main>

      {selectedProductId && (
        <ProductDetail 
          product={PRODUCTS.find(p => p.id === selectedProductId)!} 
          onClose={() => setSelectedProductId(null)}
          onAddToBag={addToBag}
          isWishlisted={wishlistIds.includes(selectedProductId)}
          onToggleWishlist={toggleWishlist}
          relatedProducts={PRODUCTS.filter(p => p.id !== selectedProductId).slice(0, 4)}
        />
      )}

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={bag} 
        onRemove={removeFromBag}
        onCheckout={finalizeTransmission}
      />

      {/* Footer Branding for Desktop */}
      <footer className="bg-[#fcfcfd] border-t border-[#eaeaec] py-20 mt-20">
        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-[5px]">STREAM & DREAM</h3>
            <p className="text-sm text-[#535766] font-medium leading-loose">Definitive luxury for the modern aesthetic explorer. Engineered for performance and elite style.</p>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[3px] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold text-[#535766]">
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Catalog</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Wishlist</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">My Bag</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Profile</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[3px] mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-[#535766]">
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Contact Protocol</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Shipping Matrix</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">Return Logistics</li>
              <li className="hover:text-[#ff3f6c] cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[3px] mb-8">Newsletter</h4>
            <div className="relative">
              <input type="text" placeholder="Identity (Email)" className="w-full bg-white border-2 border-[#eaeaec] px-5 py-4 rounded-2xl text-xs font-bold focus:border-[#ff3f6c] outline-none" />
              <button className="mt-4 w-full bg-black text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#ff3f6c] transition-all">Authorize Subscription</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
