// Item.jsx
import React from 'react';
import '../Item/Item.css'

function Item({ usuario }) {
  const { name, last_3_dni, table, points } = usuario;
  return (
    <div className='grid grid-cols-4 gap-4 px-[3em] itemTable'>
      <span>{name}</span>
      <span>{last_3_dni}</span>
      <span>{table}</span>
      <span>{points}</span>
    </div>
  );
}

export default Item;


