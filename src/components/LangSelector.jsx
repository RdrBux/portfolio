import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LangSelector() {
  const [lang, setLang] = useState('Español');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    function clickOutside(e) {
      const isInside = e.path.some(
        (path) =>
          typeof path.className === 'string' &&
          path.className.includes('langselector')
      );
      if (!isInside) {
        setShowOptions(false);
      }
    }

    window.addEventListener('click', clickOutside);

    return () => window.removeEventListener('click', clickOutside);
  }, []);

  function changeLang(newLang) {
    if (lang !== newLang) {
      setLang(newLang);
    }
    setShowOptions(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 3.2 } }}
      className="langselector | absolute top-6 right-6 z-20 cursor-pointer select-none"
    >
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg bg-gray-900/75 py-2 px-4 font-bold text-white"
      >
        <div>{lang}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-12 rounded-lg border bg-gray-100"
          >
            <div
              onClick={() => changeLang('Español')}
              className="w-40 rounded-t-xl px-6 py-4 duration-300 hover:bg-gray-200"
            >
              Español (ES)
            </div>
            <div
              /* onClick={() => changeLang('English')} */
              className="rounded-b-lg px-6 py-4 line-through duration-300 hover:bg-gray-200"
            >
              English (EN)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

{
  /* <select className="absolute top-6 right-6 z-20 w-fit cursor-pointer rounded-full bg-gray-900/75 py-2 px-4 font-bold text-white">
  <option value="">ESPAÑOL</option>
  <option value="">ENGLISH</option>
</select> */
}
