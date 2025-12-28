
import React from 'react';
import { ViewType } from '../types';

interface ProfileProps {
  onSwitchView: (v: ViewType) => void;
}

const Profile: React.FC<ProfileProps> = ({ onSwitchView }) => {
  return (
    <div className="animate-fadeIn max-w-2xl mx-auto py-12">
      <div className="text-center mb-16">
        <div className="w-32 h-32 bg-[#1a1c2c] text-white rounded-full mx-auto mb-8 flex items-center justify-center text-5xl font-black shadow-2xl border-4 border-white">AV</div>
        <h2 className="text-4xl font-black tracking-tighter text-black mb-2">Apurv Vala</h2>
        <p className="text-[#94969f] font-bold text-sm tracking-widest uppercase">nextge.bywala@gmail.com</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border-2 border-[#eaeaec] rounded-[40px] p-10 shadow-sm transition-all hover:shadow-lg hover:border-[#ff3f6c]/20">
          <span className="text-[10px] font-black text-[#94969f] uppercase tracking-widest block mb-4">Default Coordinate</span>
          <p className="text-lg font-bold text-black leading-relaxed">
            C-15, Maruti-2, Singarva,<br />
            Ahmedabad – 382430<br />
            Gujarat, India
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => onSwitchView('orders')}
            className="h-20 bg-[#282c3f] text-white rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-[#ff3f6c] transition-all shadow-xl shadow-[#282c3f]/20"
          >
            Deployments
          </button>
          <button 
            onClick={() => onSwitchView('wishlist')}
            className="h-20 bg-white border-2 border-[#282c3f] text-[#282c3f] rounded-[24px] font-black uppercase tracking-widest text-xs hover:border-[#ff3f6c] hover:text-[#ff3f6c] transition-all"
          >
            My Wishes
          </button>
        </div>

        <button className="w-full h-16 bg-[#f5f5f6] text-[#ff3f6c] font-black uppercase tracking-[3px] rounded-[24px] text-[10px] hover:bg-red-50 transition-all mt-10">
          Terminate Session
        </button>
      </div>
      
      <div className="mt-24 pt-12 border-t border-[#eaeaec] text-center">
         <p className="text-[10px] font-black text-[#94969f] uppercase tracking-widest opacity-30">Stream & Dream Vanguard Protocol v3.1.2</p>
      </div>
    </div>
  );
};

export default Profile;
