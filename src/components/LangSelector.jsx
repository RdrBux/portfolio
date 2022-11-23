import React from 'react';

export default function LangSelector() {
  function handleClick() {
    console.log('hi');
  }

  return (
    <select className="cursor-pointer rounded-lg bg-transparent p-2">
      <option value="">ESPAÑOL</option>
      <option value="">ENGLISH</option>
    </select>
  );
}
