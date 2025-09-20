import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AnimatedOutlet from '../../components/AnimatedOutlet/AnimatedOutlet';
import { useLocation } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const mainContentRef = useRef<HTMLElement>(null);

  // Scroll to main content when route changes
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [location.pathname]);

  // Handle double click on main content to scroll to top of main content
  const handleDoubleClick = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        ref={mainContentRef}
        className="flex-1 cursor-pointer bg-white"
        onDoubleClick={handleDoubleClick}
        title="Double-click để scroll về đầu nội dung"
      >
        <AnimatedOutlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;