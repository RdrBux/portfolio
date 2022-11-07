import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import LangSelector from '../components/LangSelector';

export default function Home() {
  return (
    <motion.div>
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
          borderRadius: '2rem',
        }}
        className="h-full w-screen origin-top bg-white"
      >
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
            className="text-2xl font-semibold text-bronzegold-700"
          >
            /Desarrolador Web
            <br />
            /Diseñador Web
          </motion.p>
          <motion.p
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
      </motion.div>
      <motion.div
        exit={{ display: 'block', opacity: 1 }}
        className="absolute inset-0 z-20 hidden h-screen w-screen bg-black/30 opacity-0"
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
        className="absolute bottom-0 z-30 w-screen rounded-t-[2rem] bg-white"
      ></motion.div>
    </motion.div>
  );
}
