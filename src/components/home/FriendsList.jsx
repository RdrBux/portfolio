import { useState } from 'react';

export default function FriendsList() {
  const [showExtra, setShowExtra] = useState(false);

  const greenAvatar = (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-green-200">
      <div className="absolute top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-green-900/20"></div>
      <div className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-green-900/20"></div>
    </div>
  );
  const blueAvatar = (
    <div className="relative -ml-4 h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-sky-200">
      <div className="absolute top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-sky-900/20"></div>
      <div className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-sky-900/20"></div>
    </div>
  );
  const purpleAvatar = (
    <div className="relative -ml-4 h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-purple-200">
      <div className="absolute top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-purple-900/20"></div>
      <div className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-purple-900/20"></div>
    </div>
  );
  const orangeAvatar = (
    <div className="relative -ml-4 h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-orange-200">
      <div className="absolute top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-orange-900/20"></div>
      <div className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rounded-full bg-orange-900/20"></div>
    </div>
  );

  const plus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );

  const minus = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
  );

  return (
    <div className="shadowed | group flex h-fit w-fit shrink-0 scale-75 select-none rounded-full border border-black bg-white p-4 opacity-10 grayscale duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      {greenAvatar}
      {blueAvatar}
      {purpleAvatar}
      {showExtra && orangeAvatar}
      <div className="z-10">
        <button
          onClick={() => setShowExtra((prev) => !prev)}
          className="-ml-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-blue-500 text-white duration-300 hover:bg-blue-700"
        >
          {showExtra ? minus : plus}
        </button>
      </div>
    </div>
  );
}
