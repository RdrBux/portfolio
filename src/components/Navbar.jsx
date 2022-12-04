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
    <motion.div className="fixed bottom-8 z-50 flex w-screen justify-center">
      <motion.nav
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: 1,
          scaleX: 1,
          transition: {
            type: 'spring',
            duration: 0.6,
            delay: location.pathname === '/' ? 2.8 : 1.5,
          },
        }}
        exit={{
          opacity: 0,
          scaleX: 0,
          transition: { delay: 0.2, duration: 0.3 },
        }}
        className="flex w-[328px] select-none justify-center rounded-lg bg-zinc-900/75 py-2 font-cabinet text-[15px] text-white shadow backdrop-blur-sm"
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: location.pathname === '/' ? 3 : 1.7,
            },
          }}
          exit={{ opacity: 0 }}
          className="just grid w-[312px] grid-cols-4 font-semibold"
        >
          <li className="w-full">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
              end
            >
              <motion.div className="nav-element | relative flex justify-center rounded-lg py-2 duration-300 lg:hover:bg-white/10">
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
              <motion.div className="nav-element | relative flex justify-center rounded-lg py-2 duration-300 lg:hover:bg-white/10">
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
              <motion.div className="nav-element | relative flex justify-center rounded-lg py-2 duration-300 lg:hover:bg-white/10">
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
              <motion.div className="nav-element | relative flex justify-center rounded-lg py-2 duration-300 lg:hover:bg-white/10">
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
    </motion.div>
  );
}
