import PropTypes from 'prop-types';

function ItemsTable({ usuario }) {
    
    return (
        <tr>
            <td>{usuario.nombre}</td>
            <td>{usuario.email}</td>
            <td>{usuario.edad}</td>
            <td>{usuario.empresa}</td>
        </tr>
    );
}

ItemsTable.propTypes = {
    usuario: PropTypes.shape({
        nombre: PropTypes.string,
        email: PropTypes.string,
        edad: PropTypes.number,
        empresa: PropTypes.string,
    }),
};

export default ItemsTable;