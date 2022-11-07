import React from 'react';
import Accordion from '../components/Accordion';

export default function FullProject() {
  return (
    <div className="mt-16 h-full w-screen origin-top rounded-t-2xl bg-white font-inter">
      <div className="container flex flex-col pt-14">
        <div className="">
          <h2 className="text-5xl font-bold">TÍTULO</h2>
          <p>Descripción de la página / Otra</p>
        </div>
        <div className="mt-10">
          <Accordion />
        </div>
      </div>
    </div>
  );
}
