import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const lngs = {
  es: { nativeName: 'Español' },
  en: { nativeName: 'English' },
};

export default function LangSelector() {
  const [showOptions, setShowOptions] = useState(false);

  const { i18n } = useTranslation();

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

  function changeLang(lng) {
    i18n.changeLanguage(lng);
    setShowOptions(false);
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.8 } }}
      className="langselector | absolute top-6 right-6 z-20 cursor-pointer select-none rounded-lg shadow"
    >
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex items-center gap-2 rounded-lg bg-zinc-900/75 py-2 px-4 font-bold text-white"
      >
        <div>{lngs[i18n.resolvedLanguage].nativeName}</div>
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
            className="absolute right-0 top-12 overflow-hidden rounded-lg border bg-zinc-100"
          >
            {/*  <div
              onClick={() => il8n.changeLanguage('es')}
              className="w-40 rounded-t-xl px-6 py-4 duration-300 hover:bg-zinc-200"
            >
              Español (ES)
            </div>
            <div
              onClick={() => il8n.changeLanguage('en')}
              className="w-40 rounded-b-lg px-6 py-4 duration-300 hover:bg-zinc-200"
            >
              English (EN)
            </div> */}
            {Object.keys(lngs).map((lng) => (
              <div
                key={lng}
                onClick={() => changeLang(lng)}
                className="w-32 px-6 py-4 duration-300 hover:bg-zinc-200"
              >
                {lngs[lng].nativeName}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
