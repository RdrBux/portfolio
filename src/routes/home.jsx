import { motion } from 'framer-motion';
import LangSelector from '../components/LangSelector';
import TransitionElement from '../components/TransitionElement';
import star from '../assets/star.svg';
import underline from '../assets/underline.svg';
import underdeco from '../assets/underdeco.svg';
import imgFront from '../assets/img-front.png';

export default function Home() {
  return (
    <TransitionElement>
      <div className="h-screen w-full overflow-hidden">
        <div className="absolute flex h-full flex-col items-center justify-center gap-4 font-cabinet text-[14vw] font-extrabold leading-[14vw]">
          <motion.div className="flex w-screen items-end justify-center overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{
                y: 0,
                x: '-100vw',
                transition: {
                  y: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
                  x: { duration: 2, delay: 1 },
                },
              }}
              className="h-[80%]"
            >
              RODRIGO
            </motion.div>
          </motion.div>
          <motion.div className="flex w-screen items-end justify-center overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{
                y: 0,
                x: '100vw',
                transition: {
                  y: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
                  x: { duration: 2, delay: 1 },
                },
              }}
              className="h-[80%]"
            >
              RODRÍGUEZ
            </motion.div>
          </motion.div>
        </div>
        <div className="container relative flex h-full w-full items-center">
          {/* <div className="container relative flex h-full flex-col justify-between gap-10 font-cabinet"> */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 3.1, duration: 0.5, ease: 'easeOut' },
            }}
            className="absolute top-0 z-10 grid h-fit w-full grid-cols-[1fr,auto]"
          >
            <div className="w-full border-b border-black py-2">
              <div className="text-xl font-extrabold leading-none">
                RODRIGO
                <br />
                RODRÍGUEZ
              </div>
              <p className="-mt-1 text-sm text-stone-800">Desarrollador Web</p>
            </div>
            <div className="relative flex items-center border-l border-b border-black p-4 font-semibold">
              <LangSelector />
              <img
                className="absolute bottom-0 left-0 w-8 translate-y-[16.5px] -translate-x-[16.5px]"
                src={star}
                alt=""
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2.4,
                opacity: { duration: 1 },
                y: { duration: 0.3 },
              },
            }}
            className="lg:w-1/24 flex items-center text-4xl font-bold uppercase lg:text-7xl"
          >
            {/* <div className="lg:w-1/2"> */}
            {/* "lg:w-1/24 row-start-1 flex self-center text-4xl font-bold uppercase lg:text-7xl" */}
            Transformando grandes ideas en experiencias digitales únicas
            {/* </div> */}
            {/* <img className="h-96" src={imgFront} alt="" /> */}
          </motion.p>
        </div>
      </div>
    </TransitionElement>
  );
}

/* 
<div className="container relative flex h-screen flex-col justify-center gap-5">
          <LangSelector />
          <AnimatedTitle text="Rodrigo Rodríguez" type="main" />
          <motion.p
            initial={{ y: '-0.5rem', opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6,
                ease: 'easeOut',
                y: { duration: 0.5 },
                opacity: { duration: 1.2 },
              },
            }}
            className="text-2xl font-semibold text-teal-700"
          >
            /Desarrollador Web
            <br />
            /Diseñador Web
          </motion.p>
          <motion.p
            className="max-w-sm text-stone-600 lg:text-lg"
            initial={{ y: '-0.25rem', opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              ease: 'easeOut',
              transition: {
                delay: 0.8,
                y: { duration: 0.5 },
                opacity: { duration: 1.2 },
              },
            }}
          >
            Trabajando en la transformación de grandes ideas en experiencias
            digitales únicas.
          </motion.p>
        </div>
*/

/* <div className="container relative flex h-full flex-col gap-5 pt-10">
          <LangSelector />
          <div>
            <p className="text-xl font-semibold leading-none lg:text-2xl lg:leading-6">
              RODRIGO
              <br />
              RODRÍGUEZ
            </p>
            <p className="-mt-1 text-sm">Desarrollador Web</p>
          </div>
          <p className="text-4xl uppercase lg:text-7xl">
            Trabajando en la transformación de{' '}
            <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text font-semibold text-transparent">
              grandes ideas
            </span>{' '}
            en experiencias digitales únicas
          </p>
        </div> */
