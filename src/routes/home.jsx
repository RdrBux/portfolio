import { motion } from 'framer-motion';
import Comment from '../components/home/Comment';
import Faces from '../components/home/Faces';
import FriendsList from '../components/home/FriendsList';
import SoundPlayer from '../components/home/SoundPlayer';
import VideoPlayer from '../components/home/VideoPlayer';
import LangSelector from '../components/LangSelector';
import TransitionElement from '../components/TransitionElement';

export default function Home() {
  return (
    <TransitionElement>
      <div className="h-screen w-full overflow-hidden bg-white">
        <div className="absolute flex h-full flex-col items-center justify-center gap-4 text-[18vw] font-extrabold leading-[18vw]">
          <motion.div className="flex w-screen items-end justify-center overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{
                y: 0,
                x: '-120vw',
                transition: {
                  y: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
                  x: { duration: 2, delay: 1 },
                },
              }}
              className="h-[90%]"
            >
              RODRIGO
            </motion.div>
          </motion.div>
          <motion.div className="flex w-screen items-end justify-center overflow-hidden">
            <motion.div
              initial={{ y: '100%' }}
              animate={{
                y: 0,
                x: '120vw',
                transition: {
                  y: { duration: 0.5, ease: 'easeOut', delay: 0.1 },
                  x: { duration: 2, delay: 1 },
                },
              }}
              className="h-[90%]"
            >
              RODRÍGUEZ
            </motion.div>
          </motion.div>
        </div>
        <div className="container relative h-full w-full items-center gap-3 lg:grid lg:grid-cols-2">
          <LangSelector />
          <div className="z-10 flex h-full flex-col justify-center gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.4,
                  opacity: { duration: 2 },
                  y: { duration: 0.3 },
                },
              }}
              className="text-[16vw] font-extrabold leading-none lg:text-8xl 2xl:text-9xl"
            >
              RODRIGO <br />
              RODRÍGUEZ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.6,
                  opacity: { duration: 2 },
                  y: { duration: 0.3 },
                },
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl"
            >
              /Desarrollador Fullstack
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.8,
                  opacity: { duration: 2 },
                  y: { duration: 0.3 },
                },
              }}
              className="max-w-sm text-lg text-slate-800"
            >
              Trabajando en la transformación de grandes ideas en experiencias
              digitales únicas
            </motion.p>
            <div className=""></div>
          </div>
          {/* <div className="lg:bottom-400 absolute -bottom-20 -right-20 w-full  rounded-xl lg:relative lg:-mt-60"> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 3.0,
                duration: 1,
              },
            }}
            className="h-full overflow-hidden lg:relative"
          >
            <div className="scale-50 lg:scale-100 2xl:scale-125">
              <div className="rotated | flex flex-col gap-4 opacity-50">
                <div className="ml-20 flex gap-4">
                  <VideoPlayer />
                  <VideoPlayer />
                </div>
                <div className="flex items-center gap-4">
                  <Faces />
                  <SoundPlayer />
                  <SoundPlayer />
                </div>
                <div className="flex items-center gap-4">
                  <Comment />
                  <Comment />
                  <FriendsList />
                </div>
                <FriendsList />
              </div>
            </div>
          </motion.div>
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
