import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

export default function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
