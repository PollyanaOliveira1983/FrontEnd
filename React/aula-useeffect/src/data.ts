const products = [
    {
        id:1,
        name: "TV",
        price: 2000.0
    },

    {
        id:2,
        name: "Computador",
        price: 5000.0
    }
]

export function findProduct(id: number) {
    return products.find(x => x.id === id)
}