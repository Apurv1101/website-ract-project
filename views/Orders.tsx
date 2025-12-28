
import React from 'react';
import { Order } from '../types';

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  const getProgress = (status: string) => {
    const map: Record<string, number> = { 'Ordered': 25, 'Confirmed': 50, 'Shipped': 75, 'Delivered': 100 };
    return map[status] || 25;
  };

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-[6px] mb-4">Transmission History</h2>
        <div className="h-1 w-20 bg-[#ff3f6c] mx-auto rounded-full" />
      </div>

      {orders.length === 0 ? (
        <div className="py-32 text-center opacity-30">
          <p className="text-xl font-black uppercase tracking-[3px]">No active deployments recorded.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {orders.map(order => {
            const progress = getProgress(order.status);
            return (
              <div key={order.id} className="bg-white border-2 border-[#eaeaec] rounded-[40px] p-8 md:p-12 shadow-sm transition-all hover:shadow-xl hover:border-[#ff3f6c]/20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-[#f5f5f6]">
                  <div>
                    <span className="text-[10px] font-black text-[#94969f] uppercase tracking-widest">Protocol ID</span>
                    <h3 className="text-xl font-black text-black">{order.id}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-[#94969f] uppercase tracking-widest">Initialization Date</span>
                    <p className="text-sm font-bold">{order.date}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-10 no-scrollbar overflow-x-auto">
                  {order.items.map((item, i) => (
                    <div key={i} className="w-16 h-20 md:w-20 md:h-28 rounded-2xl overflow-hidden shadow-md shrink-0 border border-[#f5f5f6]">
                      <img src={item.img} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="mb-10">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-xs font-black uppercase text-black">Status: {order.status}</span>
                     <span className="text-xs font-black text-[#ff3f6c]">Total: ₹{order.total}</span>
                   </div>
                   <div className="h-2 w-full bg-[#f5f5f6] rounded-full relative overflow-hidden">
                     <div 
                      className="absolute top-0 left-0 h-full bg-[#03a685] rounded-full transition-all duration-1000" 
                      style={{ width: `${progress}%` }}
                     />
                   </div>
                   <div className="flex justify-between mt-4">
                     {['Ordered', 'Confirmed', 'Shipped', 'Delivered'].map(s => (
                       <span key={s} className={`text-[9px] font-black uppercase tracking-tighter ${getProgress(s) <= progress ? 'text-[#03a685]' : 'text-[#94969f]'}`}>{s}</span>
                     ))}
                   </div>
                </div>

                <div className="bg-[#fcfcfd] p-6 rounded-3xl border border-[#eaeaec]">
                   <span className="text-[10px] font-black text-[#94969f] uppercase tracking-widest mb-2 block">Delivery Coordinate</span>
                   <p className="text-xs md:text-sm font-bold text-[#282c3f] leading-relaxed">{order.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;
