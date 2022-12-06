import { useState } from 'react';
import ItemCollapse from './ItemCollapse';

export default function Accordion({ data }) {
  /* const data = [
    { title: 'Información' },
    { title: 'Objetivo' },
    { title: 'Trabajo realizado' },
    { title: 'Año' },
  ]; */

  const [activeItem, setActiveItem] = useState(data[0].title);

  const itemsDisplay = data.map((item) => (
    <ItemCollapse
      key={item.title}
      title={item.title}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      content={item.content}
    />
  ));

  return <div className="border-t">{itemsDisplay}</div>;
}
