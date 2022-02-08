const products = [
    {
        id:1,
        title: 'Remera cuello redondo',
        price: '2000',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/santinoretoque1-111-85ec14d7d65360812d16371681540497-1024-1024.jpg'
    },

    {
        id:2,
        title: 'Pantalon Corto',
        price: '5000',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/_mg_31421-9fe3bbeb4df2b5590b16441649711278-1024-1024.jpg'
    },
    {
        id:3,
        title: 'Buzo Canguro',
        price: '6000',
        imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/111/097/products/_mg_49441-5900cb0cb13e157a9c16355469875874-1024-1024.jpg'
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