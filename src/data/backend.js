const guitarras = [
    {
        id: 1,
        category: "Telecaster",
        model: "STAR TL100",
        price: 200,
        img: '/items/t100.jpg',
        description: 'Guitarra tipo Telecaster en color Butterscotch, con cuerpo de Tilo, y mástil y diapasón de Arce Canadiense. Cuenta con 2 pickups vintage single coil, cejuela acrílica, tuners de tipo vintage simple, y puente fijo de 3 celletas.'
    },
    {
        id: 2,
        category: "Telecaster",
        model: "STAR TL500",
        price: 350,
        img: '/items/t500.jpg',
        description: 'Guitarra tipo Telecaster en color Dark Sunburst, con cuerpo de Tilo, mástil de Arce Canadiense, y diapasón de Rosewood. Cuenta con 2 pickups (1 vintage single coil y 1 humbucker), cejuela de hueso, tuners de tipo vintage simple, y puente fijo de 6 celletas.'
    },
    {
        id: 3,
        category: "Telecaster",
        model: "STAR TL550",
        price: 400,
        img: '/items/t550.jpg',
        description: 'Guitarra tipo Telecaster en color True Black, con cuerpo de Wengue, mástil de Arce Canadiense, y diapasón de Rosewood. Cuenta con 2 pickups (1 vintage single coil y 1 humbucker), cejuela de hueso, tuners con bloqueo, y puente fijo de 6 celletas.'
    },
    {
        id: 4,
        category: "Telecaster",
        model: "STAR TL800",
        price: 500,
        img: '/items/t800.jpg',
        description: 'Guitarra tipo Telecaster en color True Sunburst, con cuerpo de Caoba, mástil de Arce Canadiense Flameado, y diapasón de Arce Canadiense. Cuenta con 2 pickups vintage single coil Gold, cejuela de hueso, tuners Gold con bloqueo, y puente fijo Gold de 6 celletas.'
    },
    {
        id: 5,
        category: "Stratocaster",
        model: "STAR ST100",
        price: 200,
        img: '/items/st100.jpg',
        description: 'Guitarra tipo Stratocaster en color True Black, con cuerpo de Tilo, mástil de Arce Canadiense, y diapasón de Arce Canadiense. Cuenta con 3 pickups single coil cerámicos, cejuela acrílica, tuners de tipo vintage, y puente tremolo tradicional cromado.'
    },
    {
        id: 6,
        category: "Stratocaster",
        model: "STAR ST450",
        price: 350,
        img: '/items/st450.jpg',
        description: 'Guitarra tipo Stratocaster en color Transparent Aquamarine, con cuerpo de Tilo y tapa de Arce Canadiense flameado, mástil de Arce Canadiense tostado, y diapasón de Arce Canadiense. Cuenta con 3 pickups (2 single coil cerámicos y 1 humbucker cromado), cejuela de hueso, tuners de tipo vintage, y puente tremolo tradicional cromado.'
    },
    {
        id: 7,
        category: "Stratocaster",
        model: "STAR ST550",
        price: 400,
        img: '/items/st550.jpg',
        description: 'Guitarra tipo Stratocaster en color Transparent Brown, con cuerpo de Tilo y tapa de Álamo, mástil de Arce Canadiense tostado, y diapasón de Rosewood. Cuenta con 3 pickups (2 single coil cerámicos y 1 humbucker cromado), cejuela de hueso, tuners con bloqueo, y puente tremolo Wilkinson cromado.'
    },
    {
        id: 8,
        category: "Stratocaster",
        model: "STAR ST800",
        price: 600,
        img: '/items/st800.jpg',
        description: 'Guitarra tipo Stratocaster en color Pure Dark, con cuerpo de Caoba, mástil de Arce Canadiense, y diapasón de Arce Canadiense. Cuenta con 2 pickups (2 humbucker activos), cejuela de hueso, tuners Gold con bloqueo, y puente tremolo Wilkinson Gold.'
    },
    {
        id: 9,
        category: "Jazzmaster",
        model: "STAR JZ100",
        price: 200,
        img: '/items/jz100.jpg',
        description: 'Guitarra tipo Jazzmaster en color True Black, con cuerpo de Tilo, mástil de Arce Canadiense, y diapasón de Arce Canadiense. Cuenta con 2 pickups (2 humbucker cerámicos cromados), cejuela acrílica, tuners de tipo vintage, y puente fixed string through body.'
    },
    {
        id: 10,
        category: "Jazzmaster",
        model: "STAR JZ300",
        price: 450,
        img: '/items/jz300.jpg',
        description: 'Guitarra tipo Jazzmaster barítona en color Moonburst, con cuerpo de Álamo, mástil de Arce Canadiense Tostado, y diapasón de Rosewood. Cuenta con 2 pickups (2 humbucker cerámicos con covertura P90), cejuela de hueso, tuners con bloqueo, y puente fixed string through body.'
    },
    {
        id: 11,
        category: "Telecaster",
        model: "STAR TL300",
        price: 350,
        img: '/items/jt300.jpg',
        description: 'Guitarra tipo Telecaster en color Shell Pink, con cuerpo de Tilo, mástil de Arce Canadiense Tostado, y diapasón de Rosewood. Cuenta con 2 pickups vintage single coil cerámicos, cejuela de hueso, tuners de tipo vintage simple, y puente fijo de 3 celletas.'
    },
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