import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
  return (
    <div className="font-inter min-h-screen bg-gold">
      <Navbar />
      <Outlet />
    </div>
  );
}
