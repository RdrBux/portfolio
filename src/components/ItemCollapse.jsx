import { AnimatePresence, motion } from 'framer-motion';

export default function ItemCollapse({
  title,
  activeItem,
  setActiveItem,
  content,
}) {
  const state = activeItem === title;

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`h-5 w-5 ${state ? '' : 'rotate-180'} duration-200`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );

  function handleClick() {
    if (activeItem === title) {
      setActiveItem('');
    } else {
      setActiveItem(title);
    }
  }

  return (
    <div className="border-b">
      <div
        onClick={handleClick}
        className="flex cursor-pointer select-none items-center justify-between py-5"
      >
        <p className="font-semibold">{title}</p>
        {chevron}
      </div>
      <AnimatePresence>
        {state && (
          <motion.div
            key={title}
            initial={{ height: 0 }}
            animate={{
              height: 'auto',
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            exit={{
              height: 0,
              transition: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="overflow-hidden text-stone-600"
          >
            {content}
            <div className="pb-5"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
