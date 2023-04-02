
// const product =

// const { default: axios } = require("axios");
// const { response } = require("express");

// `[
//     {
//         "name": "headphone1",
//         "price": "700",
//         "image": "https://media.istockphoto.com/id/1325906677/photo/modern-design-of-black-color-wireless-earphone-isolated.jpg?b=1&s=170667a&w=0&k=20&c=NqkzH2XxDe81TB2WzNIHDIMr_r7NCeD8y-kDRmgCg0M=",
//         "count": "0",
//         "selected": "false"
//     },
//     {
//         "name": "headphone2",
//         "price": "702",
//         "image": "https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164__340.jpg",
//         "count": "0",
//         "selected": "false"
//     },
//     {
//         "name": "headphone3",
//         "price": "700",
//         "image": "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.jpg?b=1&s=170667a&w=0&k=20&c=3tiFSD3oRoQXUoOVA6S2EommW5JUDciyUXBqjfSPyLQ=",
//         "count": "0",
//         "selected": "false"
//     },
//     {
//         "name": "headphone4",
//         "price": "700",
//         "image": "https://media.istockphoto.com/id/860853774/photo/blue-headphones-isolated-on-a-white-background.jpg?b=1&s=170667a&w=0&k=20&c=gGPzyBznbjrCMb1tXjUi6js6Dh-vCp4XIgAaSERnIhs=",
//         "count": "0",
//         "selected": "false"
//     },
//     {
//         "name": "headphone5",
//         "price": "701",
//         "image": "https://cdn.pixabay.com/photo/2019/06/22/04/38/headphones-4290812__340.jpg",
//         "count": "0",
//         "selected": "false"
//     },
//     {
//         "name": "headphone6",
//         "price": "700",
//         "image": "https://media.istockphoto.com/id/1182209797/photo/close-view-of-wireless-black-gaming-headphones-with-microphone-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=YkT5jyY-NFh1Zhkhzvps_h226pLoPLie1CgpDw27SJA=",
//         "count": "0",
//         "selected": "false"
//     }
// ]`
// console.log(product);

// Convert  product to JSON 
//   const productJSON = JSON.stringify(product);
//   console.log(productJSON);

//object
//   const productobj = JSON.parse(productJSON);
//   console.log(productobj);

// console.log(JSON.parse(product)[0].name);

// const categories =[...new set(product.map((item)=>
//     {
//     return item
// }))]

// let i=0;
// document.getElementById('root').innerHTML =categories.map((item)=>
// {
//     var {image,name,price} = item;
//     return productDiv;
// })
  



    axios.get('./js/product.json')
        .then(function (response) {

            // handle success
            
            console.log(response.data.product);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

        // product.forEach(element => {

           
        // });






