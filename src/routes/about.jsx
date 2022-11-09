import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';

export default function About() {
  const navigate = useNavigate();

  const parentAnim = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delay: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const childAnim = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  function handleContact() {
    navigate('/contact');
  }

  return (
    <motion.div>
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
          borderRadius: '2rem',
        }}
        className="h-full w-full origin-top bg-white pb-28"
      >
        <div className="container flex flex-col gap-5">
          <div className="py-20 text-center uppercase lg:py-32">
            <AnimatedTitle text="Sobre mí" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={parentAnim}
            className="flex flex-col gap-20"
          >
            <motion.div variants={childAnim} className="lg:w-1/2">
              <h2 className="text-3xl font-bold lg:text-6xl">
                Rodrigo Rodríguez
              </h2>
              <div className="mt-4 flex flex-col gap-2 text-black/75">
                <p>
                  Desarrollador y diseñador web, actualmente viviendo en
                  Argentina.
                </p>
                <p>
                  Apasionado por la creación de grandes experiencias digitales,
                  siempre enfocado en la microgestión de cada detalle e
                  interacción para optimizar las experiencias de usuarios.
                </p>
                <p>
                  Formación académica en Administración de Empresas con
                  conocimientos en gestion y control, marketing, contabilidad y
                  finanzas.
                </p>
                <p>
                  Tenista, runner y ajedrecista en el tiempo libre.
                  <br />
                  Amante de los animales.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={childAnim}
              className="flex flex-col gap-4 lg:gap-6"
            >
              <h3 className="text-3xl font-bold lg:text-6xl">HABILIDADES</h3>
              <div>
                Stack más usado:{' '}
                <div className="tooltip | inline-block">
                  MERN
                  <span className="tooltiptext">
                    MongoDB, Express, React, Node.js
                  </span>
                </div>
                .
              </div>
              <div className="grid gap-2 uppercase lg:grid-cols-2 lg:gap-4">
                <div className="">
                  <h4 className="font-bold">FRONTEND</h4>
                  <p className="text-black/75">
                    html, css, javascript, typescript, react, tailwindcss, gsap,
                    framer motion
                  </p>
                </div>
                <div className="">
                  <h4 className="font-bold">BACKEND</h4>
                  <p className="text-black/75">
                    node.js, express, mongodb, MYSQL, firebase
                  </p>
                </div>
                <div className="">
                  <h4 className="font-bold">TESTING</h4>
                  <p className="text-black/75">jest, cypress</p>
                </div>
                <div className="">
                  <h4 className="font-bold">DISEÑO</h4>
                  <p className="text-black/75">figma, illustrator, photoshop</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={childAnim} className="flex gap-2 text-2xl">
              Ponte en{' '}
              <button onClick={handleContact} className="group">
                <div className="flex items-center gap-1">
                  CONTACTO{' '}
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
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                <span className="block h-[1px] max-w-full bg-black duration-300 group-hover:max-w-0"></span>
              </button>
            </motion.div>
          </motion.div>
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
