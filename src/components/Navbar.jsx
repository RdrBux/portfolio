import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

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
      className="fixed bottom-8 left-1/2 z-40 -ml-[164px] flex w-[328px] select-none justify-center rounded-full bg-black/75 py-2 font-inter text-[14px] text-white shadow-lg backdrop-blur-sm"
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.4 } }}
        exit={{ opacity: 0 }}
        className="just grid w-[312px] grid-cols-4 font-medium"
      >
        <li className="w-full">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative flex justify-center py-2 hover:rounded-full hover:bg-white/5">
              <div className="relative w-fit">
                Inicio
                {activeLink === '/' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-1 right-1 h-0.5 rounded-full bg-white"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative flex justify-center py-2 hover:rounded-full hover:bg-white/5">
              <div className="relative w-fit">
                Projectos
                {activeLink === '/projects' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-1 right-1 h-0.5 rounded-full bg-white"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative flex justify-center py-2 hover:rounded-full hover:bg-white/5">
              <div className="relative w-fit">
                Sobre mí
                {activeLink === '/about' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-1 right-1 h-0.5 rounded-full bg-white"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <motion.div className="nav-element | relative flex justify-center py-2 hover:rounded-full hover:bg-white/5">
              <div className="relative w-fit">
                Contacto
                {activeLink === '/contact' && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-1 right-1 h-0.5 rounded-full bg-white"
                  ></motion.div>
                )}
              </div>
            </motion.div>
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
