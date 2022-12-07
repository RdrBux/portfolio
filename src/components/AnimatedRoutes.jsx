import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../routes/about';
import Contact from '../routes/contact';
import FullProject from '../routes/fullProject';
import Home from '../routes/home';
import ProjectDOIT from '../routes/projectDOIT';
import Projects from '../routes/projects';
import ProjectSkullcrushers from '../routes/projectSkullcrushers';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-full max-w-full font-cabinet text-zinc-800">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/project" element={<FullProject />} /> */}
          <Route path="/doit" element={<ProjectDOIT />} />
          <Route path="/skullcrushers" element={<ProjectSkullcrushers />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
