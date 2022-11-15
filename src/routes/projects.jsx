import { motion } from 'framer-motion';
import Project from '../components/Project';

export default function Projects() {
  return (
    <motion.div>
      <div className="h-full w-full max-w-full bg-stone-300">
        <div className="container flex flex-col">
          <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-center uppercase">
            {/* <AnimatedTitle text="Proyectos Recientes" /> */}
            <div className="flex flex-col items-center gap-4 font-cabinet text-[54px] font-extrabold leading-none md:text-8xl lg:text-9xl 2xl:text-[12rem]">
              <motion.div className="flex w-full items-end justify-center overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{
                    y: 0,
                    transition: {
                      y: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
                    },
                  }}
                  className="h-[80%]"
                >
                  PROYECTOS
                </motion.div>
              </motion.div>
              <motion.div className="flex w-full items-end justify-center overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{
                    y: 0,
                    transition: {
                      y: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
                    },
                  }}
                  className="h-[80%]"
                >
                  RECIENTES
                </motion.div>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1,
                },
              }}
              className="max-w-sm pl-1 text-sm text-neutral-900 md:max-w-md"
            >
              Una colección de proyectos en los que he trabajado, sean páginas o
              aplicaciones web, pensadas en la búsqueda de soluciones a
              problemas actuales y futuros
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9, duration: 1 } }}
            className="mb-20 flex flex-col gap-12 lg:gap-20"
          >
            <Project />
            <hr />
            <Project />
            <hr />
            <Project />
          </motion.div>
        </div>
      </div>
      <motion.div
        exit={{ display: 'block', opacity: 1 }}
        className="fixed inset-0 z-20 hidden h-screen w-full bg-black/30 opacity-0"
      ></motion.div>
      <motion.div
        animate={{
          height: 0,
          transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 },
        }}
        exit={{
          height: '100vh',
          transition: {
            height: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
        }}
        className="fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-stone-900 text-7xl text-neutral-200"
      >
        RR
      </motion.div>
    </motion.div>
  );
}
