import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Accordion from '../components/Accordion';
import ProjectImg from '../assets/project-img1.png';
import ProjectArticle from '../components/ProjectArticle';
import CloseProject from '../components/CloseProject';
import ProjectNav from '../components/ProjectNav';

export default function FullProject() {
  const [showFixedEls, setShowFixedEls] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function x() {
      if (window.scrollY > 100 && !showFixedEls) {
        setShowFixedEls(true);
      }
      if (window.scrollY <= 100 && showFixedEls) {
        setShowFixedEls(false);
      }
    }

    window.addEventListener('scroll', x);
    return () => window.removeEventListener('scroll', x);
  }, [showFixedEls]);

  return (
    <motion.div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-50 h-2 origin-left bg-teal-600"
      ></motion.div>
      <div className="relative mt-16 w-full max-w-full rounded-t-2xl bg-white lg:rounded-t-[2rem]">
        <AnimatePresence>
          {showFixedEls && (
            <div>
              <ProjectNav />
            </div>
          )}
        </AnimatePresence>
        <div className="container flex flex-col pt-14 lg:pt-24">
          <CloseProject />
          <div className="">
            <h2 className="text-5xl font-bold lg:text-7xl">TÍTULO</h2>
            <p className="text-neutral-600 lg:text-lg">
              Descripción de la página / Otra
            </p>
          </div>
          <div className="mt-10 lg:mt-16">
            <Accordion />
          </div>
          <div className="flex flex-col gap-8 py-10 lg:py-16">
            <img src={ProjectImg} alt="" />
            <img src={ProjectImg} alt="" />
            <img src={ProjectImg} alt="" />
          </div>
          <div>
            <ProjectArticle />
            <ProjectArticle />
          </div>
          <div className="h-[100vh] py-10">
            <div className="flex h-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-black/50 text-white">
              <p>SIGUIENTE PROYECTO</p>
              <h3 className="text-4xl font-semibold md:text-6xl lg:text-8xl">
                SKULLCRUSHERS
              </h3>
            </div>
          </div>
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
