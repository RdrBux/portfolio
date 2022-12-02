import { useState, useEffect } from 'react';
import pop from '../../assets/sounds/pop.mp3';
import photo from '../../assets/sounds/photo.mp3';
import swoosh from '../../assets/sounds/swoosh.mp3';
import surprise from '../../assets/sounds/surprise.mp3';
import money from '../../assets/sounds/money.mp3';
import wrong from '../../assets/sounds/wrong.mp3';

export default function SoundPlayer() {
  const [sound, setSound] = useState(new Audio(pop));
  const [soundName, setSoundName] = useState('Pop');
  const [playing, setPlaying] = useState(false);
  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
    playing ? sound.play() : sound.pause();
  }, [playing, sound]);

  useEffect(() => {
    sound.addEventListener('ended', () => setPlaying(false));
    return () => {
      sound.removeEventListener('ended', () => setPlaying(false));
    };
  }, [sound]);

  const sounds = [
    { name: 'Pop', file: pop },
    { name: 'Surprise', file: surprise },
    { name: 'Money', file: money },
    { name: 'Photo', file: photo },
    { name: 'Swoosh', file: swoosh },
    { name: 'Wrong', file: wrong },
  ];

  function handleChangeSound(side) {
    if (playing) return;

    const currIndex = sounds.findIndex((sound) => sound.name === soundName);
    const arrLen = sounds.length;
    const newIndex = getIndex(side);

    setSoundName(sounds[newIndex].name);
    setSound(new Audio(sounds[newIndex].file));

    function getIndex(side) {
      if (side === 'left') {
        return currIndex === 0 ? arrLen - 1 : currIndex - 1;
      }
      if (side === 'right') {
        return (currIndex + 1) % arrLen;
      }
    }
  }

  const chevron = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className={`h-3 w-3 cursor-pointer ${
        playing ? 'text-slate-400' : 'text-slate-900'
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );

  const playButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 cursor-pointer text-blue-700 duration-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clipRule="evenodd"
      />
    </svg>
  );

  const pauseButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 cursor-pointer text-blue-700 duration-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="shadowed | flex w-60 shrink-0 select-none flex-col items-center gap-4 rounded-lg border border-black bg-white p-4 opacity-20 grayscale duration-300 hover:bg-blue-200 hover:opacity-100 hover:grayscale-0">
      <div className="flex items-end gap-2">
        <div className="h-10 w-5 rounded-full bg-amber-200 duration-300"></div>
        <div className="h-16 w-5 rounded-full bg-amber-200 duration-300"></div>
        <div className="h-14 w-5 rounded-full bg-amber-200 duration-300"></div>
        <div className="h-20 w-5 rounded-full bg-amber-200 duration-300"></div>
        <div className="h-16 w-5 rounded-full bg-amber-200 duration-300"></div>
      </div>
      <div className="flex w-full items-center justify-between rounded-full bg-black/10 p-1 duration-300">
        <div className="ml-6 w-full leading-tight">
          <p className="font-bold">Play me</p>
          <div className="mt-2 flex w-24 items-center justify-between gap-2">
            <div onClick={() => handleChangeSound('left')}>{chevron}</div>
            <p className="text-xs">{soundName}</p>
            <div
              onClick={() => handleChangeSound('right')}
              className="rotate-180"
            >
              {chevron}
            </div>
          </div>
        </div>
        <div onClick={toggleSound}>{playing ? pauseButton : playButton}</div>
      </div>
    </div>
  );
}
