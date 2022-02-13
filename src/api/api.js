const products = [
    {
        id:1,
        title: 'Remera cuello redondo',
        price: '2000',
        description: 'Una remera muy comoda para el dia a dia',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/santinoretoque1-111-85ec14d7d65360812d16371681540497-1024-1024.jpg',
        category:'remeras'
    },

    {
        id:2,
        title: 'Pantalon Corto',
        price: '5000',
        description: 'Un pantalon para esos dias de calor donde que verte bien',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/_mg_31421-9fe3bbeb4df2b5590b16441649711278-1024-1024.jpg',
        category:'pantalones'
    },
    {
        id:3,
        title: 'Buzo Canguro',
        price: '6000',
        description: 'Mucho frio pero mucha facha con este buzo canguro',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/_mg_49441-5900cb0cb13e157a9c16355469875874-1024-1024.jpg',
        category:'buzos'
    }
]


const promesa = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve(products)
    }, 1500)
})


function getProducts() {
    return promesa
}

export {
    getProducts
}