import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../routes/about';
import Contact from '../routes/contact';
import FullProject from '../routes/fullProject';
import Home from '../routes/home';
import Projects from '../routes/projects';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-full max-w-full font-cabinet text-neutral-900">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<FullProject />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
