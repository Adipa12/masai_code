// Create a product listing page that fetches data from the
// FakeStoreAPI (https://fakestoreapi.com/products) and displays the product details in a grid format.
// Each product should show its image, title, price, and a button labeled "View Details".
// If the API call fails (e.g., an incorrect URL is used), display a user-friendly error message.



    async function fetchData() {
        try {
            //Fetch data from the API
            let response = await fetch("https://fakestoreapi.com/products");
            //  Check if response is not ok
            if (!response.ok) {
                throw new Error("Network Response was not ok");
            }
            //  Convert response to JSON
            let products = response.json();
            // Display products in console dynamically
            console.log("Products List:")

            products.forEach((product, index) => {
                console.log(`${index + 1}.${product.title} - ${product.price}`);
            })
            // Use reduce to calculate the total price of all products
            const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
            console.log("\nTotal Price of all Products:", totalPrice.toFixed(2));
        } catch (error) {
            console.error("Failed to fetch products. Please try again later");
            console.error("Error:", error.message);
        }
    }
    fetchData()
