import Project from '../components/Project';

export default function Projects() {
  return (
    <div className="container flex flex-col">
      <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-center uppercase">
        <h1 className="text-5xl font-semibold md:text-7xl lg:text-8xl xl:text-9xl">
          Proyectos
          <br />
          Recientes
        </h1>
        <p className="max-w-sm text-sm">
          Una colección de proyectos en los que he trabajado, sean páginas o
          aplicaciones web, pensados en la búsqueda de soluciones a problemas
          actuales y futuros
        </p>
      </div>
      <div className="mb-20 flex flex-col gap-10 lg:gap-40">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
