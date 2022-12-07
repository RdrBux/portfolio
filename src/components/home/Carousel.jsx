import { useRef } from 'react';
import { useState } from 'react';
import kittenOne from '../../assets/carousel/kitten-1.jpg';
import kittenTwo from '../../assets/carousel/kitten-2.jpg';
import kittenThree from '../../assets/carousel/kitten-3.jpg';

export default function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const imagesRef = useRef();

  const imgSrcArr = [kittenOne, kittenTwo, kittenThree];
  function handleClickRight(currIndex) {
    const transitionByIndex = {
      0: '-translate-x-48',
      1: '-translate-x-96',
      2: '-translate-x-0',
    };

    imagesRef.current.classList = 'flex h-40 w-[36rem] duration-300';
    imagesRef.current.classList.add(transitionByIndex[carouselIndex]);
    setCarouselIndex((prev) => (prev + 1) % imgSrcArr.length);
  }

  function handleClickLeft() {
    const transitionByIndex = {
      0: '-translate-x-96',
      1: '-translate-x-0',
      2: '-translate-x-48',
    };

    imagesRef.current.classList = 'flex h-40 w-[36rem] duration-300';
    imagesRef.current.classList.add(transitionByIndex[carouselIndex]);
    if (carouselIndex === 0) {
      setCarouselIndex(imgSrcArr.length - 1);
    } else {
      setCarouselIndex((prev) => (prev - 1) % imgSrcArr.length);
    }
  }

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  return (
    <div className="h-fit w-fit shrink-0 rounded-lg border border-black bg-white p-2 opacity-10 shadow-flat grayscale delay-75 duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <div className="relative h-40 w-48 overflow-hidden rounded-lg border border-black bg-red-200">
        <div ref={imagesRef} className="flex h-40 w-[36rem] duration-300">
          <img className="h-40 w-48" src={imgSrcArr[0]} alt="" />
          <img className="h-40 w-48" src={imgSrcArr[1]} alt="" />
          <img className="h-40 w-48" src={imgSrcArr[2]} alt="" />
        </div>
        <button
          onClick={handleClickLeft}
          className="absolute top-1/2 -translate-y-1/2 rounded-r-lg bg-black/50 py-1 text-white"
        >
          {chevron}
        </button>
        <button
          onClick={handleClickRight}
          className="absolute top-1/2 right-0 -translate-y-1/2 rounded-l-lg bg-black/50 py-1 text-white"
        >
          <div className="rotate-180">{chevron}</div>
        </button>
      </div>
    </div>
  );
}
