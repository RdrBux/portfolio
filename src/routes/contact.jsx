import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedTitle from '../components/AnimatedTitle';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

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
    <motion.div className="font-inter">
      <motion.div
        exit={{
          scale: 0.9,
          translateY: '2rem',
          borderRadius: '2rem',
        }}
        className="min-h-screen w-screen max-w-full origin-top bg-white"
      >
        <div className="container flex flex-col">
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center uppercase lg:py-32">
            <AnimatedTitle text="Contacto" />
            <motion.p
              initial={{ y: '-0.25rem', opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  ease: 'easeOut',
                  y: { duration: 0.5 },
                  opacity: { duration: 1.2 },
                },
              }}
              className="max-w-sm text-sm"
            >
              No dudes en ponerte en contacto, ya sea por cuestiones laborales,
              consultas o simplemente para saludar
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-5 pb-10 text-black/80 lg:text-2xl">
            <a
              href="mailto:rodriguezrodrigoemmanuel@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group w-fit uppercase"
            >
              <div className="flex items-center gap-2">
                rodriguezrodrigoemmanuel@gmail.com
              </div>
              <span className="block h-[1px] max-w-full bg-black/75 duration-300 group-hover:max-w-0"></span>
            </a>
            <div className="flex gap-16">
              <a
                href="https://www.linkedin.com/in/rdrbux/"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-2">Linkedin {arrow}</div>
                <span className="block h-[1px] max-w-full bg-black/75 duration-300 group-hover:max-w-0"></span>
              </a>
              <a
                href="https://github.com/RdrBux"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="flex items-center gap-2">Github {arrow}</div>
                <span className="block h-[1px] max-w-full bg-black/75 duration-300 group-hover:max-w-0"></span>
              </a>
            </div>
          </div>
          <hr />
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 py-10 text-sm lg:py-20 lg:text-base"
          >
            <h3 className="text-3xl font-bold">Enviar un mensaje</h3>
            <label className="flex flex-col font-medium">
              Nombre*
              <input
                className="mt-1 rounded-lg bg-gray-200 px-4 py-2 text-base"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="flex flex-col font-medium">
              Correo electrónico*
              <input
                className="mt-1 rounded-lg bg-gray-200 px-4 py-2 text-base"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="flex flex-col font-medium">
              Mensaje*
              <textarea
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 rounded-lg bg-gray-200 px-4 py-2 text-base"
                required
              />
            </label>
            <button className="rounded-lg bg-black py-4 text-base font-bold text-white">
              ENVIAR
            </button>
          </form>

          <div className="">
            <hr />
            <div className="pb-24 pt-10 text-center">
              © Rodrigo Rodríguez 2022. <br />
              Todos los derechos reservados.
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        exit={{ display: 'block', opacity: 1 }}
        className="fixed inset-0 z-20 hidden h-screen w-screen bg-black/30 opacity-0"
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
        className="fixed bottom-0 z-30 w-screen rounded-t-[2rem] bg-white"
      ></motion.div>
    </motion.div>
  );
}
