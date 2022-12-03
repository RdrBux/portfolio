import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: 1,
        scaleX: 1,
        transition: { type: 'spring', duration: 0.6 },
      }}
      exit={{
        opacity: 0,
        scaleX: 0,
        transition: { delay: 0.2, duration: 0.3 },
      }}
      className="fixed bottom-8 left-1/2 z-30 -ml-[164px] w-[328px] select-none rounded-lg bg-zinc-900/75 font-cabinet text-[14px] text-white shadow-lg backdrop-blur-sm"
    >
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-evenly font-medium"
      >
        <li>
          <a
            className="inline-block py-4 px-2 hover:underline"
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            mode="wait"
          >
            Ver demo
          </a>
        </li>
        <div className="h-6 w-[1px] bg-zinc-500"></div>
        <li>
          <a
            className="inline-block py-4 px-2 hover:underline"
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
          >
            Ver código
          </a>
        </li>
      </motion.ul>
    </motion.nav>
  );
}
