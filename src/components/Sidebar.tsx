import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-screen md:w-[30%] lg:w-[25%] hidden md:block overflow-hidden border-r border-slate-200 dark:border-slate-800">
      <img
        src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop"
        alt="QA Engineering"
        className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
      <div className="absolute bottom-10 left-6 lg:left-10 text-white z-10">
        <h2 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase">QA Engineer</h2>
        <div className="h-1.5 w-16 bg-blue-600 mt-3 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Sidebar;
