
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: (name: string, address: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onCheckout }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerName, setCustomerName] = useState('Apurv Vala');
  const [address, setAddress] = useState('C-15, Maruti-2, Singarva, Ahmedabad – 382430');

  const total = items.reduce((acc, curr) => acc + curr.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[7000] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn" onClick={onClose} />
      
      {/* Drawer */}
      <div className="relative w-full max-w-[480px] h-full bg-white shadow-2xl animate-[slideInRight_0.5s_cubic-bezier(0.19,1,0.22,1)] flex flex-col">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#eaeaec] flex items-center justify-between">
          <h3 className="text-lg font-black uppercase tracking-[3px]">Shopping Bag</h3>
          <button onClick={onClose} className="p-2 hover:bg-[#f5f5f6] rounded-full transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 no-scrollbar">
          {!showCheckout ? (
            items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center opacity-30">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <p className="text-xl font-black uppercase tracking-widest">Bag Vacant</p>
              </div>
            ) : (
              <div className="space-y-8">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-6 relative group border-b border-[#f5f5f6] pb-6">
                    <div className="w-24 h-32 rounded-2xl overflow-hidden shrink-0 bg-[#f5f5f6]">
                      <img src={item.img} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-black uppercase tracking-tight text-black mb-1">{item.brand}</h4>
                      <p className="text-xs text-[#535766] mb-2 font-medium">{item.name}</p>
                      <div className="bg-[#f5f5f6] inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase mb-4">Size: {item.selectedSize}</div>
                      <p className="text-lg font-black">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => onRemove(item.cartId)}
                      className="absolute top-0 right-0 p-1 text-[#94969f] hover:text-[#ff3f6c] transition-colors"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12"/></svg>
                    </button>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="animate-fadeIn">
              <h4 className="text-sm font-black uppercase tracking-[2px] mb-8">Shipment Destination</h4>
              <div className="space-y-6">
                <div>
                   <label className="text-[10px] font-black uppercase text-[#94969f] block mb-2">Identity</label>
                   <input 
                    type="text" 
                    value={customerName} 
                    onChange={e => setCustomerName(e.target.value)}
                    className="w-full bg-[#f5f5f6] border-2 border-transparent px-4 py-4 rounded-xl text-sm font-bold focus:border-[#ff3f6c] outline-none transition-all"
                   />
                </div>
                <div>
                   <label className="text-[10px] font-black uppercase text-[#94969f] block mb-2">Endpoint Address</label>
                   <textarea 
                    value={address} 
                    onChange={e => setAddress(e.target.value)}
                    className="w-full bg-[#f5f5f6] border-2 border-transparent px-4 py-4 rounded-xl text-sm font-bold focus:border-[#ff3f6c] outline-none transition-all min-h-[140px] resize-none"
                   />
                </div>
                <div className="bg-[#fcfcfd] border-2 border-black p-6 rounded-2xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-xs font-black uppercase block mb-1">Payment Protocol</span>
                    <span className="text-sm font-bold">CASH ON DELIVERY</span>
                  </div>
                  <span className="bg-[#03a685] text-white text-[9px] font-black px-3 py-1 rounded">ACTIVE</span>
                </div>
              </div>
              <button 
                onClick={() => setShowCheckout(false)}
                className="mt-8 text-[11px] font-black uppercase tracking-widest text-[#ff3f6c] hover:underline"
              >
                ← Back to Bag
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-8 border-t border-[#eaeaec] bg-[#fcfcfd] rounded-t-[40px] shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-black uppercase tracking-[2px] text-[#535766]">Order Total</span>
              <span className="text-3xl font-black text-black">₹{total}</span>
            </div>
            {!showCheckout ? (
               <button 
                onClick={() => setShowCheckout(true)}
                className="w-full h-16 bg-black text-white font-black uppercase tracking-widest rounded-2xl shadow-xl hover:bg-[#ff3f6c] transition-all"
               >
                 Review Order
               </button>
            ) : (
               <button 
                onClick={() => onCheckout(customerName, address)}
                className="w-full h-16 bg-[#ff3f6c] text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-[#ff3f6c]/30 hover:brightness-110 active:scale-95 transition-all"
               >
                 Confirm Transmission
               </button>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default CartDrawer;
