const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

let products = require("./data/products");

// GET all products
app.get("/products", (req, res) => {
    res.status(200).json(products);
});

// GET single product
app.get("/products/:id", (req, res) => {
    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});

// CREATE product
app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created",
        product: newProduct
    });
});

// UPDATE product
app.put("/products/:id", (req, res) => {
    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.status(200).json({
        message: "Product updated",
        product
    });
});

// DELETE product
app.delete("/products/:id", (req, res) => {
    products = products.filter(
        p => p.id !== parseInt(req.params.id)
    );

    res.status(200).json({
        message: "Product deleted"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});