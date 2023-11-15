

const usuarios = [
    {
        id: 1,
        nombre: 'Juan',
        email: 'juan@gmail.com',
        edad: 25,
        empresa: 'Globant'
    },
    {   
        id: 2,
        nombre: 'Pedro',
        email: 'pedro@gmail.com',
        edad: 30,
        empresa: 'Microsoft'
    },
    {
        id: 3,
        nombre: 'Luisa',
        email: 'luisa@gmail.com',
        edad: 45,
        empresa: 'Apple'
    },
    {
        id: 4,
        nombre: 'Maria',
        email: 'maria@gmail.com',
        edad: 18,
        empresa: 'Google'
    },
    {
        id: 5,
        nombre: 'Ana',
        email: 'ana@gmail.com',
        edad: 67,
        empresa: 'Facebook'
    }
];

export const getUsuarios = () => {
    return new Promise ((resolve) =>{
            resolve(usuarios) 
    })
}