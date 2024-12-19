const productService = require("../services/productService");
// Creates a new product using the data in the request body.
const createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message });


    }
}
// Deletes a product based on the product ID from the request parameters.
const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}
//  Updates an existing product using the product ID from the request parameters and the updated data from the body.


const updateProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await productService.updateProduct(productId, req.body);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}
// Finds a product by its ID from the request parameters.
const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}
// Retrieves all products based on query parameters from the request.
const getAllProducts = async (req, res) => {
    const productId = req.params.id;

    try {
        const products = await productService.getAllProducts(req.query);
        return res.status(201).send(products);

    } catch (error) {

        return res.status(500).send({ error: error.message })

    }
}
// Creates multiple products using the data in the request body.
const createMultipleProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await productService.createMultipleProduct(req.body);
        return res.status(201).send({ message: "Products created successfully" });

    } catch (error) {
        return res.status(500).send({ error: error.message })

    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    createMultipleProduct,
    findProductById
}




