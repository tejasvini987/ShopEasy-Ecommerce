const Product = require("../models/Product");

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products: products
        });

    } catch (error) {
        console.error("Get Products Error:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product: product
        });

    } catch (error) {
        console.error("Get Product Error:", error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// CREATE PRODUCT
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: product
        });

    } catch (error) {
        console.error("Create Product Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to create product",
            error: error.message
        });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct
};