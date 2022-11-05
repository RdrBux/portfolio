import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
      preloader.style.display = 'none';
      setLoaded(true);
    }, 2000);
  });

  if (!loaded) return undefined;

  return (
    <div className="min-h-screen bg-white font-inter text-black">
      <Navbar />
      <Outlet />
    </div>
  );
}
