import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemsList.css'

function ItemList({ data }) {
  return (
    <div className="p-[4em]">
      <div className='grid grid-cols-4 gap-4 px-[3em] bg-yellow text-black headerTable'>
        <span>Nombre</span>
        <span>DNI</span>
        <span>Posición</span>
        <span>Puntaje</span>
      </div>
      {data.map((usuario) => (
        <div key={usuario.id}>
          <Item usuario={usuario} />
        </div>
      ))}
    </div>
  );
}

export default ItemList
