const guitarras = [
    {
        id: 1,
        model: "t100",
        price: 200,
        img: '../public/items/t100.jpg'
    },
    {
        id: 2,
        model: "t500",
        price: 350,
        img: '../public/items/t500.jpg'
    },
    {
        id: 3,
        model: "t800",
        price: 500,
        img: '../public/items/t800.jpg'
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