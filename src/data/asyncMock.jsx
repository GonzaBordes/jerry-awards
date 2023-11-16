const usuarios = [
    {
        id: 1,
        name: 'Juan',
        last_3_dni: 312,
        table: 3,
        points: 34
    },
    {
        id: 2,
        name: 'Marcos',
        last_3_dni: 872,
        table: 2,
        points: 38
    },
    {
        id: 3,
        name: 'Matias',
        last_3_dni: 900,
        table: 1,
        points: 42
    },
    {
        id: 4,
        name: 'Florencia',
        last_3_dni: '021',
        table: 4,
        points: 24
    },
    {
        id: 5,
        name: 'Gonzalo',
        last_3_dni: '012',
        table: 8,
        points: 28
    }
];

export const getUsuarios = () => {
    return new Promise ((resolve) =>{
            resolve(usuarios) 
    })
}