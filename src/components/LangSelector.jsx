import React from 'react';

export default function LangSelector() {
  function handleClick() {
    console.log('hi');
  }

  return (
    <button
      onClick={handleClick}
      className="absolute right-4 top-10 w-fit rounded bg-black/75 px-3 py-2 text-sm font-bold text-white"
    >
      ESPAÑOL
    </button>
  );
}
