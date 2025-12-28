
import React from 'react';
import { ViewType } from '../types';

interface HeaderProps {
  bagCount: number;
  wishlistCount: number;
  onSwitchView: (view: ViewType) => void;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  currentView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ 
  bagCount, 
  wishlistCount, 
  onSwitchView, 
  onOpenCart, 
  searchQuery, 
  setSearchQuery,
  currentView
}) => {
  const navLinks = [
    { name: 'Men', category: 'Men' },
    { name: 'Unisex', category: 'Unisex' },
    { name: 'The Archives', category: '' },
  ];

  const handleNavClick = (cat: string) => {
    onSwitchView('catalog');
    setSearchQuery(cat);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] bg-white/95 backdrop-blur-md z-[5000] border-b border-[#eaeaec] shadow-sm">
      <div className="max-w-[1500px] w-full mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Left: Logo & Main Nav */}
        <div className="flex items-center gap-10">
          <div 
            className="text-xl font-black tracking-[4px] uppercase cursor-pointer bg-gradient-to-r from-black to-[#ff3f6c] bg-clip-text text-transparent select-none"
            onClick={() => { onSwitchView('catalog'); setSearchQuery(''); }}
          >
            STREAM & DREAM
          </div>

          <div className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name}
                onClick={() => handleNavClick(link.category)}
                className={`text-[13px] font-extrabold uppercase tracking-widest transition-all relative py-8 group ${searchQuery === link.category ? 'text-[#ff3f6c]' : 'text-[#282c3f] hover:text-[#ff3f6c]'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-1 bg-[#ff3f6c] transform transition-transform duration-300 ${searchQuery === link.category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-[600px] relative mx-10 group">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); if(currentView !== 'catalog') onSwitchView('catalog'); }}
            className="w-full bg-[#f5f5f6] border-2 border-transparent py-2.5 pl-11 pr-4 rounded-xl text-sm font-semibold focus:bg-white focus:border-[#ff3f6c] focus:shadow-xl outline-none transition-all placeholder:text-[#94969f]"
            placeholder="Search for luxury items, Men, Unisex..."
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94969f] group-focus-within:text-[#ff3f6c]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* Right: User Actions */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => onSwitchView('profile')}
            className="flex flex-col items-center gap-1 group"
          >
            <div className={`p-1 transition-colors ${currentView === 'profile' ? 'text-[#ff3f6c]' : 'group-hover:text-[#ff3f6c]'}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Me</span>
          </button>

          <button 
            onClick={() => onSwitchView('wishlist')}
            className="flex flex-col items-center gap-1 group relative"
          >
            <div className={`p-1 transition-colors ${currentView === 'wishlist' ? 'text-[#ff3f6c]' : 'group-hover:text-[#ff3f6c]'}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff3f6c] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                {wishlistCount}
              </span>
            )}
            <span className="text-[10px] font-black uppercase tracking-widest">Wishes</span>
          </button>

          <button 
            onClick={onOpenCart}
            className="flex flex-col items-center gap-1 group relative"
          >
            <div className="p-1 group-hover:text-[#ff3f6c] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            {bagCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff3f6c] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                {bagCount}
              </span>
            )}
            <span className="text-[10px] font-black uppercase tracking-widest">Bag</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
