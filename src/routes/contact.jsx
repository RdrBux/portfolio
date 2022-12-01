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
      <div className="h-full w-full">
        {showAlert && <AlertContact isError={isError} />}
        <div className="container mt-10 pb-32">
          <div className="-mx-4 grid rounded-2xl shadow-lg lg:grid-cols-2">
            <div className="z-10 flex flex-col gap-8 rounded-t-2xl bg-blue-200 p-8 lg:rounded-r-none lg:rounded-l-2xl">
              <div>
                <h3 className="text-3xl font-bold lg:text-5xl">Contacto</h3>
                <p>
                  No dudes en comunicarte, ya sea por cuestiones laborales,
                  consultas o simplemente para saludar
                </p>
              </div>
              <div className="flex flex-col items-center gap-8 text-lg text-stone-800 lg:text-2xl">
                <a
                  href="mailto:rodriguezrodrigoemmanuel@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-fit"
                >
                  <div className="flex items-center gap-2">
                    rodriguezrodrigoemmanuel@gmail.com
                  </div>
                  <span className="block h-[1px] max-w-full bg-stone-800 duration-300 group-hover:max-w-0"></span>
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
                    <span className="block h-[1px] max-w-full bg-stone-800 duration-300 group-hover:max-w-0"></span>
                  </a>
                  <a
                    href="https://github.com/RdrBux"
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <div className="flex items-center gap-2">
                      Github {arrow}
                    </div>
                    <span className="block h-[1px] max-w-full bg-stone-800 duration-300 group-hover:max-w-0"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex h-full w-full flex-col justify-center gap-4 rounded-b-2xl bg-white p-8 lg:rounded-l-none lg:rounded-r-2xl">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4" /* lg:w-3/4 */
              >
                <h3 className="text-3xl font-bold">Enviar un mensaje</h3>
                <label className="flex flex-col font-medium text-slate-700">
                  Nombre*
                  <input
                    className="mt-1 rounded-lg bg-slate-100 p-4 text-base"
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="flex flex-col font-medium text-slate-700">
                  Correo electrónico*
                  <input
                    className="mt-1 rounded-lg bg-slate-100 p-4 text-base"
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="flex flex-col font-medium text-slate-700">
                  Mensaje*
                  <textarea
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 rounded-lg bg-slate-100 p-4 text-base"
                    required
                  />
                </label>
                <button className="mt-4 rounded-lg bg-blue-900 py-4 px-12 text-base font-bold text-white">
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </TransitionElement>
  );
}
