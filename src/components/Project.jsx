import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import VideoSrc from '../assets/Home_Slacker.mp4';

export default function Project() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/project');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div
        onClick={handleClick}
        className="flex w-full cursor-pointer flex-col lg:flex-row lg:items-center"
      >
        <div className="my-5 flex flex-col gap-5 lg:mr-20 lg:w-1/2">
          <div>
            <h2 className="text-5xl font-bold lg:text-6xl">TÍTULO</h2>
            <p className="text-neutral-500">Descripción de la página / Otra</p>
          </div>
          <p className="text-lg text-neutral-600">
            A simplified yet beautiful shopping experience with an innovative
            approach to e-commerce in the digital space.
          </p>

          <button className="flex w-fit items-center gap-2 rounded-full border border-neutral-800 px-6 py-2 text-sm font-medium text-neutral-900 shadow duration-200 hover:bg-stone-900 hover:text-white">
            <p>EXPLORAR</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="shrink-0 lg:w-1/2">
          <video playsInline muted loop autoPlay>
            <source src={VideoSrc} type="video/mp4" />
          </video>
          {/* <img className="w-full" src={ProjectImg} alt="" /> */}
        </div>
      </div>
      {/* <div className="mt-12 hidden items-center lg:flex">
        <div className="h-[1px] w-full bg-gray-200"></div>
        <div className="ml-4 flex shrink-0 gap-4">
          <button className="flex items-center gap-2 rounded-full border bg-neutral-800 px-6 py-2 text-sm font-medium text-white duration-200 hover:border-neutral-900/80 hover:bg-transparent hover:text-neutral-900">
            VER DEMO{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <button className="flex items-center gap-2 rounded-full border bg-neutral-800 px-6 py-2 text-sm font-medium text-white duration-200 hover:border-neutral-900/80 hover:bg-transparent hover:text-neutral-900">
            VER CÓDIGO{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </motion.div>
  );
}
