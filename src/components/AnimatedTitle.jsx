import { motion } from 'framer-motion';

export default function AnimatedTitle({ text, type = 'section' }) {
  const classContent =
    type === 'section'
      ? 'text-5xl font-semibold md:text-7xl lg:text-8xl xl:text-9xl'
      : 'font-respira text-[18vw] sm:text-[16vw] md:text-8xl md:leading-tight';

  const title = {
    visible: { opacity: 1, transition: { staggerChildren: 0.015 } },
    hidden: { opacity: 0 },
  };

  const chars = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: '0deg',
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    hidden: {
      opacity: 0,
      rotateX: '-40deg',
      y: '-1rem',
      scale: 0.8,
    },
  };

  const elements = text.split('').map((char) =>
    char === ' ' ? (
      <br />
    ) : (
      <motion.span className="inline-block" variants={chars}>
        {char}
      </motion.span>
    )
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={title}
      role="heading"
      aria-level={1}
      aria-label={title}
      className={classContent}
    >
      {elements}
    </motion.div>
  );
}
