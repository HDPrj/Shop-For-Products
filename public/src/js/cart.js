// Create a sample product object
const product = {
    name: "headphone1",
    price: "700",
    image: "https://media.istockphoto.com/id/1325906677/photo/modern-design-of-black-color-wireless-earphone-isolated.jpg?b=1&s=170667a&w=0&k=20&c=NqkzH2XxDe81TB2WzNIHDIMr_r7NCeD8y-kDRmgCg0M=",
    count: 0,
    selected: "false"
  };
  
  // Convert the product object to JSON format
  const productJSON = JSON.stringify(product);
  
  // Log the JSON string to the console
  console.log(typeof productJSON);
  



