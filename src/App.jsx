import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }, []);

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        {location.pathname !== '/doit' &&
          location.pathname !== '/skullcrushers' &&
          location.pathname !== '/cv' && <Navbar />}
      </AnimatePresence>
      <AnimatedRoutes />
    </>
  );
}
