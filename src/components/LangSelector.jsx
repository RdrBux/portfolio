import React from 'react';

export default function LangSelector() {
  function handleClick() {
    console.log('hi');
  }

  return (
    <button
      onClick={handleClick}
      className="h-fit w-fit rounded-full bg-teal-900/75 px-4 py-2 text-sm font-bold text-white shadow backdrop-blur-sm"
    >
      ESPAÑOL
    </button>
  );
}
