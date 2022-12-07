import { motion } from 'framer-motion';
import ProjectOne from '../components/ProjectOne';
import ProjectTwo from '../components/ProjectTwo';
import TransitionElement from '../components/TransitionElement';

export default function Projects() {
  return (
    <TransitionElement>
      <div className="w-full max-w-full">
        <div className="container flex flex-col">
          <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-center uppercase">
            <div className="flex flex-col items-center text-[54px] font-extrabold leading-none text-zinc-900 md:text-8xl lg:text-9xl 2xl:text-[12rem]">
              <motion.div className="flex w-full items-end justify-center overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{
                    y: 0,
                    transition: {
                      y: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
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
                      y: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
                    },
                  }}
                  className="h-[80%]"
                >
                  RECIENTES
                </motion.div>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4,
                  opacity: { duration: 1 },
                  y: { duration: 0.5 },
                },
              }}
              className="mt-4 max-w-sm pl-1 text-sm text-zinc-900 md:max-w-md"
            >
              Una colección de proyectos en los que he trabajado, sean páginas o
              aplicaciones web, pensadas en la búsqueda de soluciones a
              problemas actuales y futuros
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.7,
                opacity: { duration: 1 },
                y: { duration: 0.5 },
              },
            }}
            className="-mx-4 mb-32 flex flex-col gap-16 rounded-2xl bg-white py-8 px-4 sm:border sm:border-black sm:shadow-flat-r lg:gap-20 lg:py-20 lg:px-8"
          >
            <ProjectTwo />
            <hr />
            <ProjectOne />
            <hr />
          </motion.div>
        </div>
      </div>
    </TransitionElement>
  );
}
