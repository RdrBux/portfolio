import { useEffect, useState } from 'react';

export default function RedButton() {
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (index % texts.length === 14) {
      setShowButton(false);
      setTimeout(() => {
        setShowButton(true);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const texts = [
    "DON'T CLICK THE BUTTON",
    "PLEASE DON'T",
    'PLEASE STOP CLICKING',
    'STOP! IT HURTS',
    'NOTHING WILL HAPPEN',
    'RIGHT?',
    'JUST KIDDING',
    "DON'T CLICK ANYMORE",
    'WHY DO YOU KEEP CLICKING?',
    "LET'S TRY REVERSE PSYCHOLOGY",
    'PLEASE CLICK THE BUTTON',
    "MMM, IT DOESN'T WORK",
    'WHAT CAN I DO TO STOP YOU?!',
    'YES! I KNOW',
    'MUAHAHAHA',
    "DON'T BE MAD, IT WAS A JOKE",
    "OK, I DON'T KNOW WHAT ELSE TO ADD",
    'BUT THANKS FOR CLICKING',
    'YOU CAN STOP NOW',
    'AS I SAID, YOU CAN STOP NOW',
    'FEEL FREE TO CLICK THE OTHER CARDS',
    'AND REMEMBER WHAT I SAID...',
  ];

  return (
    <div className="group flex h-44 w-36 shrink-0 flex-col items-center justify-between rounded-lg border border-black bg-white px-2 py-4 opacity-10 shadow-flat grayscale duration-300 hover:opacity-100 hover:grayscale-0 lg:opacity-20">
      <div className="text-center font-bold">{texts[index]}</div>
      <div className="opacity-50AAAA relative ml-2 mb-10 rotate-[30deg] scale-125 group-hover:opacity-100">
        {showButton && (
          <div
            onClick={() => setIndex((prev) => (prev + 1) % texts.length)}
            className="red-button"
          ></div>
        )}
      </div>
    </div>
  );
}
