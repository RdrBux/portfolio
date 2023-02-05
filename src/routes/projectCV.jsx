import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';
import ProjectArticle from '../components/ProjectArticle';
import CloseProject from '../components/CloseProject';
import ProjectNav from '../components/ProjectNav';
import TransitionElement from '../components/TransitionElement';
import main from '../assets/cv/main.jpg';
import builder from '../assets/cv/builder.png';
import responsive from '../assets/cv/responsive.png';
import responsiveMobile from '../assets/cv/responsive-mobile.png';
import pdf from '../assets/cv/pdf.png';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

export default function ProjectSkullcrushers() {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      title: t('projects.titles.0'),
      content: t('projectThree.description'),
    },
    {
      title: t('projects.titles.1'),
      content: t('projectThree.accordion.goal'),
    },
    {
      title: t('projects.titles.2'),
      content: t('projectThree.accordion.work'),
    },
    {
      title: t('projects.titles.3'),
      content: 'React, React-router-dom, Tailwindcss, React-to-print, Figma',
    },
    {
      title: t('projects.titles.4'),
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
                siteURL={'https://rdrbux.github.io/cv-application/'}
                codeURL={'https://github.com/RdrBux/cv-application'}
              />
            </div>
          )}
        </AnimatePresence>
        <div className="container flex flex-col pt-14 lg:pt-24">
          <CloseProject />
          <div className="">
            <h2 className="text-5xl font-bold lg:text-7xl">CV Design</h2>
            <p className="text-zinc-600 lg:text-lg">{t('projectThree.tags')}</p>
          </div>
          <div className="mt-10 lg:mt-16">
            <Accordion data={data} />
          </div>
          <div className="min-h-[80vh]">
            <LazyLoad>
              <div className="flex flex-col gap-10 py-10 lg:py-16">
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={main} alt="" />
                </div>
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={builder} alt="" />
                </div>
              </div>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <ProjectArticle
                title={t('projectThree.articleOne.title')}
                content={t('projectThree.articleOne.description')}
              >
                <div className="grid grid-cols-[5fr,1fr] items-center gap-4 rounded-lg bg-zinc-100 p-4 lg:gap-10 lg:p-20">
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
                title={t('projectThree.articleTwo.title')}
                content={t('projectThree.articleTwo.description')}
              >
                <div className="rounded-lg bg-zinc-100 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={pdf} alt="" />
                </div>
              </ProjectArticle>
            </LazyLoad>
          </div>
          <div className="h-[100vh] py-10">
            <div
              onClick={handleClick}
              className="flex h-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-emerald-900 text-white"
            >
              <p>{t('projects.next')}</p>
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
