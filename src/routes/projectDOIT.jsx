import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ReactCompareSlider } from 'react-compare-slider';
import Accordion from '../components/Accordion';
import ProjectArticle from '../components/ProjectArticle';
import CloseProject from '../components/CloseProject';
import ProjectNav from '../components/ProjectNav';
import TransitionElement from '../components/TransitionElement';
import loginImg from '../assets/doit/login.png';
import addTaskImg from '../assets/doit/addtask.png';
import homeImg from '../assets/doit/home.png';
import light from '../assets/doit/light.png';
import dark from '../assets/doit/dark.png';
import chat from '../assets/doit/chat.png';
import chatMobile from '../assets/doit/pseudochat.png';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { useTranslation } from 'react-i18next';

export default function ProjectDOIT() {
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
    navigate('/skullcrushers');
  }

  const data = [
    {
      title: t('projects.titles.0'),
      content: t('projectTwo.description'),
    },
    {
      title: t('projects.titles.1'),
      content: t('projectTwo.accordion.goal'),
    },
    {
      title: t('projects.titles.2'),
      content: t('projectTwo.accordion.work'),
    },
    {
      title: t('projects.titles.3'),
      content:
        'React, React-router-dom, TypeScript, Tailwindcss, Firebase, Figma',
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
                siteURL={'https://doit-c5071.firebaseapp.com/'}
                codeURL={'https://github.com/RdrBux/letsdoit'}
              />
            </div>
          )}
        </AnimatePresence>
        <div className="container flex flex-col pt-14 lg:pt-24">
          <CloseProject />
          <div className="">
            <h2 className="text-5xl font-bold lg:text-7xl">DO IT</h2>
            <p className="text-zinc-600 lg:text-lg">{t('projectTwo.tags')}</p>
          </div>
          <div className="mt-10 lg:mt-16">
            <Accordion data={data} />
          </div>
          <div className="min-h-[80vh]">
            <LazyLoad>
              <div className="flex flex-col gap-10 py-10 lg:py-16">
                <div className="rounded-lg bg-zinc-100 p-4 lg:p-20">
                  <img className="rounded-lg shadow-lg" src={loginImg} alt="" />
                </div>
                <div className="grid grid-cols-2 gap-4 rounded-lg bg-zinc-100 p-4 lg:gap-10 lg:p-20">
                  <img
                    className="justify-self-end rounded-lg shadow-lg lg:w-1/2"
                    src={addTaskImg}
                    alt=""
                  />
                  <img
                    className="rounded-lg shadow-lg lg:w-1/2"
                    src={homeImg}
                    alt=""
                  />
                </div>
              </div>
            </LazyLoad>
          </div>
          <div>
            <LazyLoad>
              <ProjectArticle
                title={t('projectTwo.articleOne.title')}
                content={t('projectTwo.articleOne.description')}
              >
                <ReactCompareSlider
                  className="shadow-lg"
                  itemOne={<img className="rounded-lg" src={light} alt="" />}
                  itemTwo={<img className="rounded-lg" src={dark} alt="" />}
                />
              </ProjectArticle>
            </LazyLoad>
            <LazyLoad>
              <ProjectArticle
                title={t('projectTwo.articleTwo.title')}
                content={t('projectTwo.articleTwo.description')}
              >
                <div className="grid grid-cols-[3fr,1fr] items-center gap-4 rounded-lg bg-zinc-100 p-4 lg:gap-10 lg:p-20">
                  <img
                    className="rounded shadow-lg lg:rounded-lg"
                    src={chat}
                    alt=""
                  />
                  <img
                    className="rounded shadow-lg lg:rounded-lg"
                    src={chatMobile}
                    alt=""
                  />
                </div>
              </ProjectArticle>
            </LazyLoad>
          </div>
          <div className="h-[100vh] py-10">
            <div
              onClick={handleClick}
              className="flex h-full cursor-pointer flex-col items-center justify-center rounded-2xl bg-zinc-900 text-white"
            >
              <p>{t('projects.next')}</p>
              <h3 className="text-4xl font-semibold md:text-6xl lg:text-8xl">
                SKULLCRUSHERS
              </h3>
            </div>
          </div>
        </div>
      </div>
    </TransitionElement>
  );
}
