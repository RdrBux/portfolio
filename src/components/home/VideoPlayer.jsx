import { useState } from 'react';
import bird from '../../assets/bird.gif';
import staticBird from '../../assets/staticbird.gif';

export default function VideoPlayer() {
  const [hover, setHover] = useState(false);

  const comment = (
    <div className="flex items-center gap-2 rounded bg-gray-300 p-2">
      <div className="relative h-7 w-7 overflow-hidden rounded-full	bg-gray-50">
        <div className="absolute left-1/2 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gray-300"></div>
        <div className="full absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="h-1 w-12 rounded-full bg-gray-50"></div>
        <div className="h-1 w-8 rounded-full bg-gray-50"></div>
      </div>
    </div>
  );

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="shadowed | flex w-fit shrink-0 rounded-lg border border-black bg-white opacity-10 grayscale duration-300 hover:bg-gray-50 hover:opacity-100 hover:grayscale-0 lg:opacity-20"
    >
      <div className="flex flex-col items-center border-r border-black p-2 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <div className="mt-7 flex flex-col items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          <div className="h-3 w-3 bg-gray-300"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      <div className="grid w-60 auto-rows-auto">
        <div className="flex items-center justify-between border-b border-black px-4 py-2">
          <p className="text-sm font-bold text-gray-400">LOGO</p>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="w-60 p-4">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              {comment}
              {comment}
              {comment}
            </div>
            <div className="flex w-full items-center justify-center rounded bg-gray-300">
              <div className="h-20 w-16 rounded bg-green-500">
                <img
                  className="rounded"
                  src={hover ? bird : staticBird}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
