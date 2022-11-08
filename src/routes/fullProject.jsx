import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';
import ProjectImg from '../assets/project-img1.png';
import ProjectArticle from '../components/ProjectArticle';
import CloseProject from '../components/CloseProject';

export default function FullProject() {
  return (
    <motion.div>
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
        }}
        className="relative mt-16 w-screen max-w-full origin-top rounded-t-2xl bg-white font-inter"
      >
        <CloseProject />
        <div className="container flex flex-col pt-14">
          <div className="">
            <h2 className="text-5xl font-bold lg:text-7xl">TÍTULO</h2>
            <p className="lg:text-lg">Descripción de la página / Otra</p>
          </div>
          <div className="mt-10">
            <Accordion />
          </div>
          <div className="flex flex-col gap-8 py-10">
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
