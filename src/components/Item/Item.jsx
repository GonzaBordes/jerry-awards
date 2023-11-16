import '../Item/Item.css'

function Item({ usuario }) {
  const { name, last_3_dni, table, points } = usuario;
  return (
    <div className='grid grid-cols-4 gap-4 px-[3em] itemTable'>
      <span className="medium">{name}</span>
      <span className="medium">{last_3_dni}</span>
      <span className="medium">{table}</span>
      <span className="medium">{points}</span>
    </div>
  );
}

export default Item;