const guitarras = [
    {
        id: 1,
        model: "STAR T100",
        price: 200,
        img: '../public/items/t100.jpg',
        description: 'descripción del objeto',
        color: 'Butterscotch',
        cuerpo: 'Tilo',
        mastil: 'Arce Canadiense',
        diapason: 'Arce Canadiense',
        cejuela: 'Acrilica',
        puente: 'Fijo de 3 celletas',
        tuners: 'Simples'
    },
    {
        id: 2,
        model: "STAR T500",
        price: 350,
        img: '../public/items/t500.jpg',
        description: 'descripción del objeto 2',
        color: 'Dark Sunburst',
        cuerpo: 'Tilo',
        mastil: 'Arce Canadiense',
        diapason: 'Palo de rosa',
        cejuela: 'Hueso',
        puente: 'Fijo de 6 celletas',
        tuners: 'Con bloqueo'
    },
    {
        id: 3,
        model: "STAR T550",
        price: 400,
        img: '../public/items/t550.jpg',
        description: 'descripción del objeto 3',
        color: 'True Black',
        cuerpo: 'Wengue',
        mastil: 'Arce Canadiense',
        diapason: 'Palo de rosa',
        cejuela: 'Hueso',
        puente: 'Fijo de 6 celletas',
        tuners: 'Con bloqueo'
    },
    {
        id: 4,
        model: "STAR T800",
        price: 500,
        img: '../public/items/t800.jpg',
        description: 'descripción del objeto 4',
        color: 'True Sunburst',
        cuerpo: 'Caoba',
        mastil: 'Arce Canadiense flameado',
        diapason: 'Arce Canadiense',
        cejuela: 'Hueso',
        puente: 'Gold fijo de 6 celletas',
        tuners: 'Gold con bloqueo'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(guitarras);
            reject("Error en la solicitud: no es posible acceder a la base de datos")
        }, 1000);
    });
}