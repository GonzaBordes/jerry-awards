const usuarios = [
    {
        id: 1,
        name: 'Juan',
        last_3_dni: 312,
        empresa: 'Facebook',
        table: 1,
        points: 34
    },
    {
        id: 2,
        name: 'Marcos',
        last_3_dni: 872,
        empresa: 'Globant',
        table: 2,
        points: 38
    },
    {
        id: 3,
        name: 'Matias',
        last_3_dni: 900,
        empresa: 'Google',
        table: 2,
        points: 42
    },
    {
        id: 4,
        name: 'Florencia',
        last_3_dni: '021',
        empresa: 'Microsoft',
        table: 4,
        points: 24
    },
    {
        id: 5,
        name: 'Gonzalo',
        last_3_dni: '012',
        empresa: 'X',
        table: 8,
        points: 28
    },
    {
        id: 6,
        name: 'Martin',
        last_3_dni: '756',
        empresa: 'Pedidos Ya',
        table: 5,
        points: 23
    },
    {
        id: 7,
        name: 'Lucía',
        last_3_dni: '896',
        empresa: 'Google',
        table: 6,
        points: 5
    },
    {
        id: 8,
        name: 'Santiago',
        last_3_dni: '063',
        empresa: 'Facebook',
        table: 6,
        points: 75
    },
    {
        id: 9,
        name: 'Milagros',
        last_3_dni: '432',
        empresa: 'Globant',
        table: 6,
        points: 56
    },
    {
        id: 10,
        name: 'Martina',
        last_3_dni: '675',
        empresa: 'Microsoft',
        table: 6,
        points: 63
    },
    {
        id: 11,
        name: 'Agustina',
        last_3_dni: '243',
        empresa: 'Adventure',
        table: 6,
        points: 49
    }
];

export const getUsuarios = () => {
    return new Promise ((resolve) =>{
            resolve(usuarios) 
    })
}