import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import Project from '../components/Project';

export default function Projects() {
  const [topSidePage, setTopSidePage] = useState(true);

  useEffect(() => {
    function halfHeightSwapper() {
      const halfHeight = document.body.scrollHeight / 2;
      if (window.scrollY < halfHeight && !topSidePage) {
        setTopSidePage(true);
      }
      if (window.scrollY >= halfHeight && topSidePage) {
        setTopSidePage(false);
      }
    }

    window.addEventListener('scroll', halfHeightSwapper);
    return () => window.removeEventListener('scroll', halfHeightSwapper);
  }, [topSidePage]);

  return (
    <motion.div>
      <motion.div
        exit={{
          scale: 0.9,
          translateY: topSidePage ? '2rem' : '-4rem',
          borderRadius: '2rem',
        }}
        className={`h-full w-full max-w-full ${
          topSidePage ? 'origin-top' : 'origin-bottom'
        } bg-white`}
      >
        <div className="container flex flex-col">
          <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-center uppercase">
            <AnimatedTitle text="Proyectos Recientes" />
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
          <div className="mb-20 flex flex-col gap-20 lg:gap-40">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </motion.div>
      <motion.div
        exit={{ display: 'block', opacity: 1 }}
        className="fixed inset-0 z-20 hidden h-screen w-full bg-black/30 opacity-0"
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
        className="fixed bottom-0 z-30 w-full rounded-t-[2rem] bg-white"
      ></motion.div>
    </motion.div>
  );
}
