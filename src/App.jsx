import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
      preloader.style.display = 'none';
      setLoaded(true);
    }, 1);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
