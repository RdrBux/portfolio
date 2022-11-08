import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CloseProject() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/projects');
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
      className="fixed top-6 right-6 z-40 w-fit rounded-full bg-black p-1 text-white duration-500 hover:rotate-90 lg:right-8 lg:top-8"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </motion.button>
  );
}
