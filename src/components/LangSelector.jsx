import React from 'react';

export default function LangSelector() {
  function handleClick() {
    console.log('hi');
  }

  return (
    <select className="absolute top-6 right-6 z-20 w-fit cursor-pointer rounded-full bg-slate-900/75 py-2 px-4 font-bold text-white">
      <option value="">ESPAÑOL</option>
      <option value="">ENGLISH</option>
    </select>
  );
}
