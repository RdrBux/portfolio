import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.5, delay: 1.2 },
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
        transition: { delay: 0.2, duration: 0.3 },
      }}
      className="fixed bottom-10 left-1/2 z-40 -ml-[160px] w-80 select-none rounded-lg bg-black/75 px-4 font-inter text-[14px] text-white backdrop-blur-md"
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1.6 } }}
        exit={{ opacity: 0 }}
        className="flex justify-between"
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold text-bronzegold-400' : undefined
            }
            end
          >
            <p className="py-4 px-2">Inicio</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'font-bold text-bronzegold-400' : undefined
            }
          >
            <p className="py-4 px-2">Proyectos</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'font-bold text-bronzegold-400' : undefined
            }
          >
            <p className="py-4 px-2">Sobre mí</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-bold text-bronzegold-400' : undefined
            }
          >
            <p className="py-4 px-2">Contacto</p>
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  );
}

/* useEffect(() => {
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      alpha: 0,
      duration: 1,
    })
      .from(
        navRef.current,
        {
          borderRadius: '50px',
          scaleX: 0,
          duration: 0.5,
        },
        0.0
      )
      .from(
        ulRef.current,
        {
          alpha: 0,
          duration: 1,
        },
        '-=0.6'
      );
  }, []); */
