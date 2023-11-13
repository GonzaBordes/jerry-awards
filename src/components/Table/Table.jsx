import PropTypes from 'prop-types';
import ItemsTable from './ItemsTable';

function Table({ data }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Edad</th>
            <th scope="col">Empresa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario, index) => (
            <ItemsTable key={index} usuario={usuario} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string,
      email: PropTypes.string,
      edad: PropTypes.number,
      empresa: PropTypes.string,
    })
  ),
};

export default Table;