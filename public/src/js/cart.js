

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






