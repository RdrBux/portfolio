import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
      className="fixed bottom-8 left-1/2 z-40 -ml-[164px] w-[328px] select-none rounded-full bg-black/80  px-2 font-inter text-[14px] text-white shadow-lg backdrop-blur-sm"
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
            className={({ isActive }) =>
              isActive ? 'font-bold text-teal-200' : undefined
            }
            end
          >
            <p className="nav-element | py-4 px-2">Inicio</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'font-bold text-teal-200' : undefined
            }
          >
            <p className="nav-element | py-4 px-2">Proyectos</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'font-bold text-teal-200' : undefined
            }
          >
            <p className="nav-element | py-4 px-2">Sobre mí</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-bold text-teal-200' : undefined
            }
          >
            <p className="nav-element | py-4 px-2">Contacto</p>
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
