import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';
import ProjectArticle from '../components/ProjectArticle';
import CloseProject from '../components/CloseProject';
import ProjectNav from '../components/ProjectNav';
import TransitionElement from '../components/TransitionElement';
import home from '../assets/skullcrushers/home.png';
import store from '../assets/skullcrushers/store-main.png';
import contact from '../assets/skullcrushers/contact.png';
import responsive from '../assets/skullcrushers/store.png';
import responsiveMobile from '../assets/skullcrushers/store-mobile.png';
import cart from '../assets/skullcrushers/cart.png';
import LazyLoad from 'react-lazy-load';

export default function ProjectSkullcrushers() {
  const navigate = useNavigate();
  const [showFixedEls, setShowFixedEls] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function x() {
      if (window.scrollY > 100 && !showFixedEls) {
        setShowFixedEls(true);
      }
      if (window.scrollY <= 100 && showFixedEls) {
        setShowFixedEls(false);
      }
    }

    window.addEventListener('scroll', x);
    return () => window.removeEventListener('scroll', x);
  }, [showFixedEls]);

  function handleClick() {
    navigate('/doit');
  }

  const data = [
    {
      title: 'Información',
      content:
        'Tienda online de indumentaria masculina. Elaboración del frontend con un diseño "responsive", navegación por medio de rutas animadas.',
    },
    {
      title: 'Objetivo',
      content:
        'Crear la interfaz de usuario de una tienda online, haciendo énfasis en la interactividad por medio del uso de animaciones tanto en microtransacciones como en la disposición del "layout" en general.',
    },
    {
      title: 'Trabajo realizado',
      content:
        'Elaboración del diseño en Figma. Escritura del Frontend con React y creación de rutas empleando React-router-dom. Incorporación de animaciones empleando la librería GSAP.',
    },
    {
      title: 'Tecnologías empleadas',
      content: 'React, React-router-dom, Tailwindcss, GSAP, Figma',
    },
    {
      title: 'Año',
      content: '2022',
    },
  ];

  return (
    <TransitionElement>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-40 h-2 origin-left bg-teal-500/90"
      ></motion.div>
      <div className="relative mt-16 w-full max-w-full rounded-t-2xl bg-white lg:rounded-t-[2rem]">
        <AnimatePresence>
          {showFixedEls && (
            <div>
              <ProjectNav
                siteURL={'https://rdrbux.github.io/skullcrushers/'}
                codeURL={'https://github.com/RdrBux/skullcrushers'}
              />
            </div>
          )}
        </AnimatePresence>
        <div className="container flex flex-col pt-14 lg:pt-24">
          <CloseProject />
          <div className="">
            <h2 className="text-5xl font-bold lg:text-7xl">
              SKULL
              <br />
              CRUSHERS
            </h2>
            <p className="text-zinc-600 lg:text-lg">
              Proyecto / Diseño / Frontend
            </p>
          </div>
          <div className="mt-10 lg:mt-16">
            <Accordion data={data} />
          </div>
          <div className="min-h-[80vh]">
            <LazyLoad>
              <div className="flex flex-col gap-10 py-10 lg:py-16">
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={home} alt="" />
                </div>
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={store} alt="" />
                </div>
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={contact} alt="" />
                </div>
              </div>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <ProjectArticle
                title="Responsive design"
                content="Diseño completamente adaptado según el dispositivo que se emplee para acceder al sitio. Los objetos de la tienda se visualizan en distintos tipos de carrusel según la resolución."
              >
                <div className="grid grid-cols-[3fr,1fr] items-center gap-4 rounded-lg bg-zinc-100 p-4 lg:gap-10 lg:p-20">
                  <img
                    className="rounded shadow-lg lg:rounded-lg"
                    src={responsive}
                    alt=""
                  />
                  <img
                    className="rounded shadow-lg lg:rounded-lg"
                    src={responsiveMobile}
                    alt=""
                  />
                </div>
              </ProjectArticle>
            </LazyLoad>
            <LazyLoad>
              <ProjectArticle
                title="Carrito de compras interactivo"
                content="Posibilidad de agregar y remover objetos del carrito. Apertura automática animada al agregar un nuevo elemento. Visualización permanente de la cantidad de objetos seleccionados."
              >
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={cart} alt="" />
                </div>
              </ProjectArticle>
            </LazyLoad>
          </div>
          <div className="h-[100vh] py-10">
            <div
              onClick={handleClick}
              className="flex h-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-black/50 text-white"
            >
              <p>SIGUIENTE PROYECTO</p>
              <h3 className="text-4xl font-semibold md:text-6xl lg:text-8xl">
                DO IT
              </h3>
            </div>
          </div>
        </div>
      </div>
    </TransitionElement>
  );
}
