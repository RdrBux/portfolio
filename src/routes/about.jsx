import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div className="font-inter">
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
          borderRadius: '2rem',
        }}
        className="h-full w-full origin-top bg-white"
      >
        <div className="container flex flex-col gap-5">
          <h1>hi</h1>
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
