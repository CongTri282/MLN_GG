import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      // Start fade out
      setIsVisible(false);

      // After fade out completes, update location and fade in
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsVisible(true);
      }, 150); // Half of transition duration

      return () => clearTimeout(timer);
    } else {
      // Initial load or same location
      setIsVisible(true);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2'
        }`}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
};

export default PageTransition;