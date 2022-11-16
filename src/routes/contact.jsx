import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AlertContact from '../components/AlertContact';
import TransitionElement from '../components/TransitionElement';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m856fbi',
        'contact_form',
        form.current,
        'R7TE1S2wUygb37lBp'
      )
      .then(
        (result) => {
          setIsError(false);
          setShowAlert(true);
        },
        (error) => {
          setIsError(true);
          setShowAlert(true);
        }
      );
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    setName('');
    setEmail('');
    setMessage('');
  }

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );

  return (
    <TransitionElement>
      <div className="min-h-screen w-full max-w-full origin-top bg-stone-300">
        {showAlert && <AlertContact isError={isError} />}
        <div className="container flex flex-col lg:w-3/4">
          <div className="flex flex-col items-center gap-3 py-20 text-center uppercase lg:py-32">
            {/* <AnimatedTitle text="Contacto" /> */}
            <div className="flex flex-col items-center gap-4 font-cabinet text-[54px] font-extrabold leading-none md:text-8xl lg:text-9xl 2xl:text-[12rem]">
              <motion.div className="flex w-full items-end justify-center overflow-hidden">
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{
                    y: 0,
                    transition: {
                      y: { duration: 0.5, ease: 'easeOut', delay: 0.3 },
                    },
                  }}
                  className="h-[80%]"
                >
                  CONTACTO
                </motion.div>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 1,
                },
              }}
              className="max-w-sm pl-1 text-sm md:max-w-md"
            >
              No dudes en comunicarte, ya sea por cuestiones laborales,
              consultas o simplemente para saludar
            </motion.p>
          </div>
          <motion.div
            className="flex flex-col gap-12 lg:gap-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8, duration: 1 } }}
          >
            <div className="flex flex-col items-center gap-5 text-lg text-neutral-800 lg:text-2xl">
              <a
                href="mailto:rodriguezrodrigoemmanuel@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group w-fit"
              >
                <div className="flex items-center gap-2">
                  rodriguezrodrigoemmanuel@gmail.com
                </div>
                <span className="block h-[1px] max-w-full bg-neutral-800 duration-300 group-hover:max-w-0"></span>
              </a>
              <div className="flex gap-16">
                <a
                  href="https://www.linkedin.com/in/rdrbux/"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-2">
                    Linkedin {arrow}
                  </div>
                  <span className="block h-[1px] max-w-full bg-neutral-800 duration-300 group-hover:max-w-0"></span>
                </a>
                <a
                  href="https://github.com/RdrBux"
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-2">Github {arrow}</div>
                  <span className="block h-[1px] max-w-full bg-neutral-800 duration-300 group-hover:max-w-0"></span>
                </a>
              </div>
            </div>
            <hr />
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="mb-28 flex w-full flex-col gap-5 text-sm lg:text-base" /* lg:w-3/4 */
            >
              <h3 className="text-3xl font-bold">Enviar un mensaje</h3>
              <label className="flex flex-col font-medium text-neutral-600">
                Nombre*
                <input
                  className="mt-1 rounded-lg bg-stone-300 px-4 py-2 text-base"
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col font-medium text-neutral-600">
                Correo electrónico*
                <input
                  className="mt-1 rounded-lg bg-stone-300 px-4 py-2 text-base"
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="flex flex-col font-medium text-neutral-600">
                Mensaje*
                <textarea
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 rounded-lg bg-stone-300 px-4 py-2 text-base"
                  required
                />
              </label>
              <button className="rounded-lg bg-teal-900 py-3 px-12 text-base font-bold text-white">
                ENVIAR
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </TransitionElement>
  );
}
