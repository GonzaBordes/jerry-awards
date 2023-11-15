// Item.jsx
import React from 'react';
import '../Item/Item.css'

function Item({ usuario }) {
  const { id, nombre, email, edad, empresa } = usuario;
  return (
    <div className='grid grid-cols-5 gap-4 px-[3em] itemTable'>
      <span>{id}</span>
      <span>{nombre}</span>
      <span>{email}</span>
      <span>{edad}</span>
      <span>{empresa}</span>
    </div>
  );
}

export default Item;


