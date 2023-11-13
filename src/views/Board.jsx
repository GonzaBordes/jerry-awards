import Table from '../components/Table/Table'

const Board = () => {

  const usuarios = [
      {
          nombre: 'Juan',
          email: 'juan@gmail.com',
          edad: 25,
          empresa: 'Globant'
      },
      {
          nombre: 'Pedro',
          email: 'pedro@gmail.com',
          edad: 30,
          empresa: 'Microsoft'
      },
      {
          nombre: 'Luisa',
          email: 'luisa@gmail.com',
          edad: 45,
          empresa: 'Apple'
      },
      {
          nombre: 'Maria',
          email: 'maria@gmail.com',
          edad: 18,
          empresa: 'Google'
      },
      {
          nombre: 'Ana',
          email: 'ana@gmail.com',
          edad: 67,
          empresa: 'Facebook'
      }
  ];

    return (
      <div>
        <h1>Lista de usuarios</h1>
        <Table data={usuarios} />
      </div>
    )
}

export default Board