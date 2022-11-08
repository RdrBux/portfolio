import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import Project from '../components/Project';

export default function Projects() {
  return (
    <motion.div>
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
          borderRadius: '2rem',
        }}
        className="h-full w-screen max-w-full origin-top bg-white"
      >
        <div className="container flex flex-col">
          <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-center uppercase">
            <AnimatedTitle text="Proyectos Recientes" />
            <motion.p
              initial={{ y: '-0.25rem', opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.7,
                  ease: 'easeOut',
                  y: { duration: 0.5 },
                  opacity: { duration: 1.2 },
                },
              }}
              className="max-w-sm text-sm"
            >
              Una colección de proyectos en los que he trabajado, sean páginas o
              aplicaciones web, pensados en la búsqueda de soluciones a
              problemas actuales y futuros
            </motion.p>
          </div>
          <div className="mb-20 flex flex-col gap-20 lg:gap-40">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </motion.div>
      <motion.div
        exit={{ display: 'block', opacity: 1 }}
        className="fixed inset-0 z-20 hidden h-screen w-screen bg-black/30 opacity-0"
      ></motion.div>
      <motion.div
        exit={{
          height: '100vh',
          borderRadius: 0,
          transition: {
            height: { duration: 0.3, delay: 0.3, ease: 'easeOut' },
            borderRadius: { duration: 0.1, delay: 0.5 },
          },
        }}
        className="fixed bottom-0 z-30 w-screen rounded-t-[2rem] bg-white"
      ></motion.div>
    </motion.div>
  );
}
