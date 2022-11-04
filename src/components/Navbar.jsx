import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed bottom-10 left-1/2 z-40 flex w-80 -translate-x-1/2 justify-between rounded-lg bg-black/75 px-6 py-4 font-inter text-sm text-white">
      <button>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
          end
        >
          Inicio
        </NavLink>
      </button>
      <button>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
        >
          Proyectos
        </NavLink>
      </button>
      <button>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
        >
          Sobre mí
        </NavLink>
      </button>
      <button>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
        >
          Contacto
        </NavLink>
      </button>
    </div>
  );
}
