import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import videoOne from '../assets/do360-1.mp4';
import videoTwo from '../assets/do360-2.mp4';
import videoThree from '../assets/do360-3.mp4';

export default function ProjectTwo() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/doit');
  }

  const parentAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const childrenAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={parentAnim}
    >
      <div
        onClick={handleClick}
        className="flex w-full cursor-pointer flex-col lg:flex-row lg:items-center"
      >
        <div className="my-5 flex flex-col gap-5 lg:mr-20 lg:w-1/2">
          <div>
            <motion.h2
              variants={childrenAnim}
              className="text-[14vw] font-bold leading-none text-black sm:text-7xl lg:text-6xl 2xl:text-7xl"
            >
              DO IT
            </motion.h2>
            <motion.p variants={childrenAnim} className="text-zinc-700">
              Proyecto / Diseño / Frontend / Backend
            </motion.p>
          </div>
          <motion.p
            variants={childrenAnim}
            className="text-lg text-zinc-800 lg:max-w-sm 2xl:max-w-md"
          >
            El calendario virtual que te organizará tu vida personal y social.
            DO IT permite crear actividades, compartirlas con amigos y chatear
            desde la aplicación.
          </motion.p>

          <motion.button
            variants={childrenAnim}
            className="flex w-fit items-center gap-2 rounded-lg border border-black bg-black px-6 py-2 text-sm font-bold text-white duration-300 hover:bg-transparent hover:text-black"
          >
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
          </motion.button>
        </div>
        <div className="shrink-0 lg:w-7/12">
          <LazyLoad offset={200}>
            <div className="relative grid grid-cols-3 gap-2 xl:gap-4">
              <video playsInline muted loop autoPlay>
                <source src={videoOne} type="video/mp4" />
              </video>
              <video playsInline muted loop autoPlay>
                <source src={videoTwo} type="video/mp4" />
              </video>
              <video playsInline muted loop autoPlay>
                <source src={videoThree} type="video/mp4" />
              </video>
            </div>
          </LazyLoad>
        </div>
      </div>
    </motion.div>
  );
}
