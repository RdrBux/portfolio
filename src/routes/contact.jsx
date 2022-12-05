import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AlertContact from '../components/AlertContact';
import TransitionElement from '../components/TransitionElement';
import InputContact from '../components/InputContact';
import TextareaContact from '../components/TextareaContact';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useRef();

  const windowWidth = window.innerWidth;

  const parentAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const childrenAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

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
      <div className="h-full w-full">
        {showAlert && <AlertContact isError={isError} />}
        <div className="container mt-10 pb-32">
          <motion.div
            initial={{
              scaleX: windowWidth >= 1024 ? 0 : 1,
              scaleY: windowWidth >= 1024 ? 1 : 0,
            }}
            animate={{
              scaleX: 1,
              scaleY: 1,
              transition: { delay: 0.2, duration: 0.5, ease: 'easeOut' },
            }}
            className="-mx-4 grid origin-bottom rounded-2xl shadow-lg sm:shadow-flat-r lg:grid-cols-2"
          >
            <div className="z-10 rounded-t-2xl bg-teal-400 py-16  px-6 text-zinc-900 sm:border-y sm:border-l sm:border-black lg:rounded-r-none lg:rounded-l-2xl lg:p-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={parentAnim}
                className="flex h-full flex-col justify-center gap-16"
              >
                <div>
                  <motion.h3
                    variants={childrenAnim}
                    className="text-center text-6xl font-bold lg:text-8xl"
                  >
                    CONTACTO
                  </motion.h3>
                  <motion.p variants={childrenAnim} className="text-center">
                    No dudes en comunicarte, ya sea por cuestiones laborales,
                    consultas o simplemente para saludar
                  </motion.p>
                </div>
                <div className="flex flex-col items-center gap-8 text-lg lg:text-2xl">
                  <motion.a
                    variants={childrenAnim}
                    href="mailto:rodriguezrodrigoemmanuel@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group w-fit"
                  >
                    <div className="flex items-center gap-2">
                      rodriguezrodrigoemmanuel@gmail.com
                    </div>
                    <span className="block h-[1px] max-w-full bg-zinc-800 duration-300 group-hover:max-w-0"></span>
                  </motion.a>
                  <div className="flex gap-16">
                    <motion.a
                      variants={childrenAnim}
                      href="https://www.linkedin.com/in/rdrbux/"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-2">
                        Linkedin {arrow}
                      </div>
                      <span className="block h-[1px] max-w-full bg-zinc-800 duration-300 group-hover:max-w-0"></span>
                    </motion.a>
                    <motion.a
                      variants={childrenAnim}
                      href="https://github.com/RdrBux"
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-2">
                        Github {arrow}
                      </div>
                      <span className="block h-[1px] max-w-full bg-zinc-800 duration-300 group-hover:max-w-0"></span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex h-full w-full flex-col justify-center gap-4 rounded-b-2xl bg-white px-6 py-16 sm:border-y sm:border-r sm:border-black lg:rounded-l-none lg:rounded-r-2xl lg:p-12 lg:px-12">
              <motion.form
                initial="hidden"
                whileInView="visible"
                variants={parentAnim}
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
              >
                <motion.h3
                  variants={childrenAnim}
                  className="text-4xl font-bold lg:text-5xl"
                >
                  Enviar un mensaje
                </motion.h3>
                <motion.div variants={childrenAnim}>
                  <InputContact
                    label="Nombre"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="user_name"
                    variants={childrenAnim}
                  />
                </motion.div>
                <motion.div variants={childrenAnim}>
                  <InputContact
                    type="email"
                    label="Correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="user_email"
                    variants={childrenAnim}
                  />
                </motion.div>
                <motion.div variants={childrenAnim}>
                  <TextareaContact
                    label="Mensaje"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    variants={childrenAnim}
                  />
                </motion.div>
                <motion.button
                  variants={childrenAnim}
                  className="rounded-lg border border-black bg-teal-800 py-4 px-12 font-bold text-white shadow-flat-r duration-300 hover:bg-teal-900 hover:shadow-none"
                >
                  ENVIAR
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </TransitionElement>
  );
}
