import ProjectImg from '../assets/project-img1.png';

export default function Project() {
  function handleClick() {
    console.log('project clicked');
  }

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer flex-col lg:flex-row lg:items-center lg:gap-20"
    >
      <div className="flex flex-col lg:w-1/2 lg:gap-5">
        <div>
          <h2 className="text-3xl font-bold lg:text-6xl">TÍTULO</h2>
          <p className="mt-3 text-black/80">Descripción de la página / Otra</p>
        </div>
        <p className="hidden text-lg text-black/90 lg:block">
          A simplified yet beautiful shopping experience with an innovative
          approach to e-commerce in the digital space.
        </p>
        <button className="my-3 w-fit font-bold text-black/60">
          EXPLORAR {'->'}
        </button>
      </div>
      <img className="w-full" src={ProjectImg} alt="" />
    </div>
  );
}
