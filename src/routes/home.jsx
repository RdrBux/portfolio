import { motion } from 'framer-motion';
import TransitionElement from '../components/TransitionElement';

export default function Home() {
  return (
    <TransitionElement>
      <div className="h-screen w-full origin-top overflow-hidden">
        {/* <div className="absolute">
          <img className="h-screen w-screen opacity-50" src={bgCircle} alt="" />
        </div> */}
        <div className="absolute flex h-full flex-col items-center justify-center font-cabinet text-[14vw] font-extrabold leading-[14vw]">
          <div className="flex flex-col items-center gap-4">
            <motion.div className="flex w-screen items-end justify-center overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{
                  y: 0,
                  x: '-100vw',
                  transition: {
                    y: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
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
                    y: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
                    x: { duration: 2, delay: 1 },
                  },
                }}
                className="h-[80%]"
              >
                RODRÍGUEZ
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="container relative flex h-full flex-col justify-between gap-10 font-cabinet">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 3.1, duration: 0.5, ease: 'easeOut' },
            }}
            className="z-10 grid grid-cols-[1fr,auto]"
          >
            <div className="grow-1 w-full rounded-br-2xl border-b border-black bg-stone-300 py-4">
              <div className="text-xl font-extrabold leading-none">
                RODRIGO
                <br />
                RODRÍGUEZ
              </div>
              <p className="-mt-1 text-sm text-stone-800">Desarrollador Web</p>
            </div>
            <div className="relative flex items-center rounded-bl-2xl border-l border-b border-black bg-stone-300 p-4 font-semibold before:absolute before:-bottom-3 before:-left-3 before:-z-10 before:h-6 before:w-6 before:rotate-45 before:bg-black">
              <div>
                <span className="font-extrabold">ESPAÑOL X</span>
                <br />
                ENGLISH
              </div>
              {/* <div className="before:absolute before:-bottom-4 before:-left-4 before:z-0 before:h-8 before:w-8 before:rotate-45 before:bg-black"></div> */}
            </div>
            <div className="h-4 rounded-tr-2xl bg-stone-300"></div>
            <div className="h-4 rounded-tl-2xl bg-stone-300"></div>
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
            className="text-4xl font-medium uppercase lg:text-8xl"
          >
            Transformando{' '}
            <span
              className="font-extrabold" /* className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent" */
            >
              grandes ideas
            </span>{' '}
            en experiencias digitales únicas
          </motion.p>
          <div className="h-20"></div>
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
