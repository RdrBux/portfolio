import LangSelector from '../components/LangSelector';

export default function Home() {
  return (
    <div className="container relative flex h-screen flex-col justify-center gap-5">
      <LangSelector />
      <h1 className="md: font-respira text-[18vw] sm:text-[16vw] md:text-8xl md:leading-tight">
        Rodrigo
        <br />
        Rodríguez
      </h1>
      <p className="text-2xl font-semibold">
        /Desarrolador Web
        <br />
        /Diseñador Web
      </p>
      <p>
        Trabajando en la transformación de grandes ideas en experiencias
        digitales únicas.
      </p>
    </div>
  );
}
