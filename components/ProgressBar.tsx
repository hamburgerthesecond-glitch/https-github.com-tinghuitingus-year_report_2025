import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setWidth(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/50">
      <div 
        className="h-full bg-gradient-to-r from-red-600 via-blue-600 to-white transition-all duration-150 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;