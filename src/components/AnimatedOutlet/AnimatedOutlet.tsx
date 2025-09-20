import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AnimatedOutlet: React.FC = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Loading overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center z-10 transition-opacity duration-300">
          <div className="flex flex-col items-center space-y-4">
            {/* Loading spinner */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            {/* Loading text */}
            <p className="text-gray-600 text-sm font-medium animate-pulse">
              Đang tải trang...
            </p>
          </div>
        </div>
      )}

      {/* Page content with transition */}
      <div
        className={`transition-all duration-300 ease-in-out ${isTransitioning
          ? 'opacity-50 scale-95'
          : 'opacity-100 scale-100'
          }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AnimatedOutlet;