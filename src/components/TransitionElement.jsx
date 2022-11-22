import { motion } from 'framer-motion';

export default function TransitionElement(props) {
  return (
    <motion.div>
      {props.children}
      <motion.div
        animate={{
          scaleY: 0,
          transition: { ease: 'easeOut', duration: 0.5 },
          /* transition: { duration: 0.3, ease: 'easeOut', delay: 0.3 }, */
        }}
        exit={{
          scaleY: 1,
          transformOrigin: 'bottom',
          transition: { ease: 'easeIn', duration: 0.5 },
        }}
        className="fixed top-0 z-40 flex h-screen w-screen origin-top flex-col items-center justify-center overflow-hidden bg-purple-300 text-7xl text-stone-300"
      ></motion.div>
    </motion.div>
  );
}
