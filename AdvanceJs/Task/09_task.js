const products = require("../task.json");
/*
//1.find product by gender

// function findProductsByGender(userInputGender) {
    //     let data = products.filter((product) => {
        
        //         let genderdata = product.gender.toLowerCase() === userInputGender.toLowerCase();
        //         return genderdata
//     });
//     return data;
// }

// let data = findProductsByGender("Kids");
// console.log("product data:", data);

//2.count products by gender give by the user

function getProductCountByGender(userGender) {
    
    const productsCount = products.filter(product => product.gender === userGender);
    
    return productsCount.length;
}

let maleProductCount = getProductCountByGender("male");
console.log("maleProductCount :", maleProductCount)

let femaleProductCount = getProductCountByGender("female");
console.log("femaleProductCount :", femaleProductCount)


//3.Function to find descriptions of products in a specific category

function productDescriptions(category) {
    let matchProducts = products.filter(product => product.category.includes(category));
    
    const descriptions = matchProducts.map(product => product.description);
    
    return descriptions;
}

let Descriptions = productDescriptions("shoes");
console.log("Descriptions:", Descriptions)

*/

function getProductDescriptions(category, brand) {
    // Filter products based on category and brand
    let matchedProducts = products.filter(product =>
        product.category.includes(category) && product.brand === brand
    );



    // Extract descriptions from matched products
    const descriptions = matchedProducts.map(product => product.description);
    console.log("🚀 ~ file: 09_task.js:56 ~ getProductDescriptions ~ descriptions:", descriptions)

    return descriptions;
}

// Usage example:
const category = ["smartphones", "5g"];
const brand = "Samsung";
const descriptions = getProductDescriptions(category, brand);

console.log("Product Descriptions:", descriptions);
