import Item from '../Item/Item'
import '../ItemList/ItemsList.css'

function ItemList({ data }) {

  const usuariosOrdenados = data.slice().sort((a, b) => b.points - a.points)

  return (
    <div className="p-[4em]">
      <div className='grid grid-cols-4 gap-4 px-[3em] bg-yellow text-black headerTable'>
        <span className="bold">Nombre</span>
        <span className="bold">DNI</span>
        <span className="bold">Mesa</span>
        <span className="bold">Puntaje</span>
      </div>
      {usuariosOrdenados.map((usuario) => (
        <div key={usuario.id}>
          <Item usuario={usuario} />
        </div>
      ))}
    </div>
  );
}

export default ItemList
