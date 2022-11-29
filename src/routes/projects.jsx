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
            {/* <AnimatedTitle text="Proyectos Recientes" /> */}
            <div className="flex flex-col items-center font-cabinet text-[54px] font-extrabold leading-none md:text-8xl lg:text-9xl 2xl:text-[12rem]">
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
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1,
                },
              }}
              className="mt-4 max-w-sm pl-1 text-sm text-stone-900 md:max-w-md"
            >
              Una colección de proyectos en los que he trabajado, sean páginas o
              aplicaciones web, pensadas en la búsqueda de soluciones a
              problemas actuales y futuros
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9, duration: 1 } }}
            className="-mx-4 mb-20 flex flex-col gap-16 rounded-[2rem] border bg-white py-8 px-4 shadow-lg lg:gap-20 lg:py-20 lg:px-8"
          >
            <ProjectOne />
            <hr />
            <ProjectTwo />
            <hr />
            <ProjectOne />
          </motion.div>
        </div>
      </div>
    </TransitionElement>
  );
}
