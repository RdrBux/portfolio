import { motion } from 'framer-motion';
import TransitionElement from '../components/TransitionElement';
import imgFront from '../assets/img-front.png';

export default function About() {
  return (
    <TransitionElement>
      <div className="h-full w-full">
        <div className="container mt-10 pb-32">
          <div className="-mx-4 grid rounded-2xl sm:shadow-flat-r lg:grid-cols-2">
            <div className="z-10 flex flex-col gap-8 rounded-t-2xl bg-white py-8 px-6 sm:border-y sm:border-l sm:border-black lg:rounded-l-2xl lg:rounded-r-none lg:px-12">
              <div className="h-32 w-32 self-center rounded-full bg-teal-200"></div>
              {/* <img
                className="h-40 w-40 self-center rounded-full bg-red-200"
                src={imgFront}
                alt=""
              /> */}
              <h2 className="text-center text-4xl font-bold text-zinc-900 lg:text-left lg:text-6xl">
                Rodrigo Rodríguez
              </h2>
              <div className="flex flex-col gap-3 text-lg text-zinc-800">
                <p>
                  Desarrollador fullstack y diseñador web, actualmente viviendo
                  en Argentina.
                </p>
                <p>
                  Técnico en Administración de Empresas con formación en gestión
                  y control, marketing, contabilidad y finanzas.
                </p>
                <p>
                  Apasionado por la creación de grandes experiencias digitales,
                  siempre enfocado en la microgestión de cada detalle e
                  interacción para optimizar las experiencias de usuarios.
                </p>
                <p>
                  Tenista, runner y ajedrecista en el tiempo libre.
                  <br />
                  Amante de los animales.
                </p>
              </div>
            </div>
            <div className="flex h-full w-full flex-col justify-center gap-4 rounded-b-2xl bg-teal-200 px-6 py-12 sm:border-y sm:border-r sm:border-black lg:rounded-l-none lg:rounded-r-2xl lg:px-12">
              <h3 className="text-5xl font-bold text-zinc-900">Habilidades</h3>

              <div className="text-xl text-zinc-800">
                Uso de GitHub, Git. Stack más usado:{' '}
                <div className="tooltip | inline-block text-zinc-900">
                  MERN.
                  <span className="tooltiptext">
                    MongoDB, Express, React, Node.js
                  </span>
                </div>
              </div>

              <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-6">
                <div className="flex flex-col rounded-lg shadow-flat-r duration-300 hover:shadow-none">
                  <div className="flex items-center gap-4 rounded-t-lg border border-black bg-gradient-to-r from-teal-600 to-teal-500 p-4">
                    <div className="h-fit w-fit rounded-lg bg-white/20 p-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Frontend</h4>
                  </div>
                  <p className="rounded-b-lg border-x border-b border-black bg-white p-4 text-black">
                    HTML, CSS, Javascript, Typescript, React, Tailwindcss, Gsap,
                    Framer Motion
                  </p>
                </div>

                <div className="flex h-full flex-col rounded-lg shadow-flat-r duration-300 hover:shadow-none">
                  <div className="flex items-center gap-4 rounded-t-lg border border-black bg-gradient-to-r from-teal-600 to-teal-500 p-4">
                    <div className="h-fit w-fit rounded-lg bg-white/10 p-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Backend</h4>
                  </div>
                  <p className="h-full rounded-b-lg border-x border-b border-black bg-white p-4 text-black">
                    Node.js, Express, MongoDB, MySQL, Firebase
                  </p>
                </div>

                <div className="flex h-full flex-col rounded-lg shadow-flat-r duration-300 hover:shadow-none">
                  <div className="flex items-center gap-4 rounded-t-lg border border-black bg-gradient-to-r from-teal-600 to-teal-500 p-4">
                    <div className="h-fit w-fit rounded-lg bg-white/10 p-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Testing</h4>
                  </div>
                  <p className="rounded-b-lg border-x border-b border-black bg-white p-4 text-black">
                    Jest, Cypress
                  </p>
                </div>

                <div className="flex flex-col rounded-lg shadow-flat-r duration-300 hover:shadow-none">
                  <div className="flex items-center gap-4 rounded-t-lg border border-black bg-gradient-to-r from-teal-600 to-teal-500 p-4">
                    <div className="h-fit w-fit rounded-lg bg-white/10 p-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Diseño</h4>
                  </div>
                  <p className="rounded-b-lg border-x border-b border-black bg-white p-4 text-black">
                    Figma, Illustrator, Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionElement>
  );
}
