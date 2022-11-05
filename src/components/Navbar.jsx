import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul className="fixed bottom-10 left-1/2 z-40 flex w-80 -translate-x-1/2 select-none justify-between rounded-lg bg-black/75 px-6 font-inter text-sm text-white backdrop-blur-md">
      <li>
        <button>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            end
          >
            <p className="py-4">Inicio</p>
          </NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
          >
            <p className="py-4">Proyectos</p>
          </NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
          >
            <p className="py-4">Sobre mí</p>
          </NavLink>
        </button>
      </li>
      <li>
        <button>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
          >
            <p className="py-4">Contacto</p>
          </NavLink>
        </button>
      </li>
    </ul>
  );
}
