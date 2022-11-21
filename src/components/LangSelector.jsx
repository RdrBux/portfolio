import React from 'react';

export default function LangSelector() {
  function handleClick() {
    console.log('hi');
  }

  return (
    <select className="cursor-pointer bg-transparent">
      <option value="">ESPAÑOL</option>
      <option value="">ENGLISH</option>
    </select>
  );
}
