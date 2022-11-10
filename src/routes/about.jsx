import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../components/AnimatedTitle';
import Picture from '../assets/picture.jpg';

export default function About() {
  const navigate = useNavigate();

  const parentAnim = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
        delay: 0.15,
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
        className="h-full w-full origin-top bg-white pb-32"
      >
        <div className="container flex flex-col gap-5">
          <div className="py-20 text-center uppercase lg:py-32">
            <AnimatedTitle text="Sobre mí" />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={parentAnim}
            className="flex flex-col gap-12 lg:gap-20"
          >
            <motion.div
              variants={childAnim}
              className="grid items-center lg:grid-cols-2 lg:gap-20"
            >
              <div className="z-10">
                <h2 className="text-3xl font-bold lg:text-5xl">
                  Rodrigo Rodríguez
                </h2>
                <div className="mt-8 flex flex-col gap-4 text-neutral-600 lg:gap-8 lg:text-lg">
                  <p>
                    Desarrollador y diseñador web, actualmente viviendo en
                    Argentina.
                  </p>
                  <p>
                    Apasionado por la creación de grandes experiencias
                    digitales, siempre enfocado en la microgestión de cada
                    detalle e interacción para optimizar las experiencias de
                    usuarios.
                  </p>
                  <p>
                    Técnico en Administración de Empresas con formación en
                    gestion y control, marketing, contabilidad y finanzas.
                  </p>
                  <p>
                    Tenista, runner y ajedrecista en el tiempo libre.
                    <br />
                    Amante de los animales.
                  </p>
                </div>
              </div>
              <img
                className="row-start-1 rounded-2xl lg:col-start-2 lg:mb-0" /* -mb-20 */
                src={Picture}
                alt=""
              />
            </motion.div>
            <hr />
            <motion.div
              variants={childAnim}
              className="flex flex-col gap-5 lg:gap-8"
            >
              <h3 className="text-3xl font-bold lg:text-5xl">Habilidades</h3>
              <div className="text-xl text-neutral-600">
                Stack más usado:{' '}
                <div className="tooltip | inline-block text-black">
                  MERN.
                  <span className="tooltiptext">
                    MongoDB, Express, React, Node.js
                  </span>
                </div>
              </div>
              <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
                <div className="flex gap-4">
                  <div className="mt-1 h-fit w-fit rounded-lg bg-teal-700 p-3 text-white">
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
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-neutral-800">
                      Frontend
                    </h4>
                    <p className="mt-1 text-neutral-500">
                      HTML, CSS, Javascript, Typescript, React, Tailwindcss,
                      Gsap, Framer Motion
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-fit w-fit rounded-lg bg-teal-700 p-3 text-white">
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
                        d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-neutral-800">
                      Backend
                    </h4>
                    <p className="mt-1 text-neutral-500">
                      Node.js, Express, MongoDb, MySQL, Firebase
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-fit w-fit rounded-lg bg-teal-700 p-3 text-white">
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
                        d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-neutral-800">
                      Testing
                    </h4>
                    <p className="mt-1 text-neutral-500">Jest, Cypress</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-fit w-fit rounded-lg bg-teal-700 p-3 text-white">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-neutral-800">
                      Diseño
                    </h4>
                    <p className="mt-1 text-neutral-500">
                      Figma, Illustrator, Photoshop
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <hr />
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
