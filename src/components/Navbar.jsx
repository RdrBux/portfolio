import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed bottom-10 left-1/2 z-40 flex w-80 -translate-x-1/2 select-none justify-between rounded-lg bg-black/75 px-6 font-inter text-sm text-white">
      <button className="py-4">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
          end
        >
          Inicio
        </NavLink>
      </button>
      <button className="py-4">
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
        >
          Proyectos
        </NavLink>
      </button>
      <button className="py-4">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
        >
          Sobre mí
        </NavLink>
      </button>
      <button className="py-4">
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
