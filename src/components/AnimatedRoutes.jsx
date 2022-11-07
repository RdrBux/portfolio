import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../routes/about';
import Contact from '../routes/contact';
import Home from '../routes/home';
import Projects from '../routes/projects';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-screen bg-stone-200">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
