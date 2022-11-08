import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  console.log(activeLink);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <motion.nav
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: { type: 'spring', duration: 0.6, delay: 1.2 },
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
        transition: { delay: 0.2, duration: 0.3 },
      }}
      className="fixed bottom-8 left-1/2 z-40 -ml-[164px] w-[328px] select-none rounded-full bg-black/75  px-2 font-inter text-[14px] text-white shadow-lg backdrop-blur-sm"
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.4 } }}
        exit={{ opacity: 0 }}
        className="flex justify-evenly font-medium"
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative py-4 px-2">
              Inicio
              {activeLink === '/' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-2 right-2 h-0.5 rounded-full bg-white"
                ></motion.div>
              )}
            </motion.div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative py-4 px-2">
              Projectos
              {activeLink === '/projects' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-2 right-2 h-0.5 rounded-full bg-white"
                ></motion.div>
              )}
            </motion.div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative py-4 px-2">
              Sobre mí
              {activeLink === '/about' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-2 right-2 h-0.5 rounded-full bg-white"
                ></motion.div>
              )}
            </motion.div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative py-4 px-2">
              Contacto
              {activeLink === '/contact' && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-2 right-2 h-0.5 rounded-full bg-white"
                ></motion.div>
              )}
            </motion.div>
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
