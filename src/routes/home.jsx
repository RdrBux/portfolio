import { motion } from 'framer-motion';
import Comment from '../components/home/Comment';
import FriendsList from '../components/home/FriendsList';
import SoundPlayer from '../components/home/SoundPlayer';
import LangSelector from '../components/LangSelector';
import TransitionElement from '../components/TransitionElement';

export default function Home() {
  return (
    <TransitionElement>
      <div className="h-screen w-full overflow-hidden bg-white">
        <div className="absolute flex h-full flex-col items-center justify-center gap-4 text-[20vw] font-extrabold leading-[14vw]">
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
              className="h-[95%]"
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
              className="h-[95%]"
            >
              RODRÍGUEZ
            </motion.div>
          </motion.div>
        </div>
        <LangSelector />
        <div className="container relative grid h-full w-full items-center gap-3 lg:grid-cols-2">
          <div className="z-10 flex flex-col gap-2">
            <h1 className="text-[16vw] font-extrabold leading-none lg:text-8xl 2xl:text-9xl">
              RODRIGO <br />
              RODRÍGUEZ
            </h1>
            <p className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
              /Desarrollador Fullstack
            </p>
            <p className="font-base max-w-sm text-lg text-slate-800">
              Trabajando en la transformación de grandes ideas en experiencias
              digitales únicas
            </p>
            <div className=""></div>
          </div>
          <div className="bg-gray-1020 shadow-i2nner absolute -bottom-40 -right-10 h-[500px]  w-full rounded-xl lg:relative">
            <div className="rotated | -mt-10 flex flex-col gap-4">
              <Comment />
              <div className="-ml-40 flex items-center gap-4">
                <SoundPlayer />
                <FriendsList />
              </div>
            </div>
          </div>
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
