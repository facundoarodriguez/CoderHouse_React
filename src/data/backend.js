const guitarras = [
    {
        id: 1,
        model: "STAR T100",
        price: 200,
        img: '../public/items/t100.jpg',
        description: 'Guitarra tipo Telecaster en color Butterscotch, con cuerpo de Tilo, y mástil y diapasón de Arce Canadiense. Cuenta con 2 pickups vintage single coil, cejuela acrílica, tuners de tipo vintage simple, y puente fijo de 3 celletas.'
    },
    {
        id: 2,
        model: "STAR T500",
        price: 350,
        img: '../public/items/t500.jpg',
        description: 'Guitarra tipo Telecaster en color Dark Sunburst, con cuerpo de Tilo, mástil de Arce Canadiense, y diapasón de Rosewood. Cuenta con 2 pickups (1 vintage single coil y 1 humbucker), cejuela de hueso, tuners de tipo vintage simple, y puente fijo de 6 celletas.'
    },
    {
        id: 3,
        model: "STAR T550",
        price: 400,
        img: '../public/items/t550.jpg',
        description: 'Guitarra tipo Telecaster en color True Black, con cuerpo de Wengue, mástil de Arce Canadiense, y diapasón de Rosewood. Cuenta con 2 pickups (1 vintage single coil y 1 humbucker), cejuela de hueso, tuners con bloqueo, y puente fijo de 6 celletas.'
    },
    {
        id: 4,
        model: "STAR T800",
        price: 500,
        img: '../public/items/t800.jpg',
        description: 'Guitarra tipo Telecaster en color True Sunburst, con cuerpo de Caoba, mástil de Arce Canadiense Flameado, y diapasón de Arce Canadiense. Cuenta con 2 pickups vintage single coil Gold, cejuela de hueso, tuners Gold con bloqueo, y puente fijo Gold de 6 celletas.'
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

export const getProduct = (id) => {
    return guitarras.find((prod) => prod.id == id);
}