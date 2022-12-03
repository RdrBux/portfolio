import { useState } from 'react';
import kittenOne from '../../assets/carousel/kitten-1.jpg';
import kittenTwo from '../../assets/carousel/kitten-2.jpg';
import kittenThree from '../../assets/carousel/kitten-3.jpg';

export default function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);
  const imgSrcArr = [kittenOne, kittenTwo, kittenThree];

  function handleClickRight() {
    setImgIndex((prev) => (prev + 1) % imgSrcArr.length);
  }

  function handleClickLeft() {
    if (imgIndex === 0) {
      setImgIndex(imgSrcArr.length - 1);
    } else {
      setImgIndex((prev) => prev - 1);
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
    <div className="h-fit w-fit shrink-0 rounded-lg border border-black p-2 opacity-10 shadow-flat grayscale duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <div className="relative h-32 w-48 overflow-hidden rounded-lg border border-black bg-red-200">
        <img className="h-full w-full" src={imgSrcArr[imgIndex]} alt="" />
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
