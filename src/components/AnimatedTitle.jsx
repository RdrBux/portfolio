import { motion } from 'framer-motion';

export default function AnimatedTitle({ text, type = 'section' }) {
  const classContent =
    type === 'section'
      ? 'text-[54px] leading-none font-semibold md:text-7xl lg:text-8xl 2xl:text-9xl'
      : 'font-respira text-[18vw] sm:text-[16vw] md:text-8xl leading-tight md:leading-tight';

  const title = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const chars = {
    visible: (i) => ({
      opacity: 1,
      rotateX: '0deg',
      rotateY: '0deg',
      scale: 1,
      transition: {
        delay: Math.log10(i + 5) - 0.7,
        duration: 0.2,
        ease: 'easeIn',
      },
    }),
    hidden: {
      opacity: 0,
      rotateX: '-20deg',
      rotateY: '50deg',
      scale: 0.8,
    },
  };

  const elements = text.split('').map((char, i) =>
    char === ' ' ? (
      <br key={i} />
    ) : (
      <motion.span
        key={i}
        className="inline-block origin-top"
        custom={i + 1}
        variants={chars}
      >
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
      aria-label={text}
      className={classContent}
    >
      {elements}
    </motion.div>
  );
}
