const productService = require('./../services/product');

const createProduct = async (req, res, next) => {
    const product = req.body;
    if(product) {
        const result = await productService.create(product);
        res.status(201).send({
            message: 'Product added successfully.'
        });
    } else {
        res.status(400).send({
            message: 'Invalid product payload.'
        });
    }
}


const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAll();
        res.status(200).send(products);
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const updateProduct = async (req, res, next) => {
    const product = req.body;
    const id = req.params.id;
    try {
        const result = await productService.updateOne(id, product)
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await productService.deleteOne(id)
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}


const getProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await productService.getOne(id);
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
}

const getByUser = async (req,res,next) => {
    try {
        const user = req.body.user;
        if(user) {
            try {
                const products = await productService.getByUser(user);
                res.status(200).send(products);
            } catch(err) {
                res.status(500).send({
                    message: `Error occured: ${err.message}`
                })
            }
        } else {
            res.status(400).send({
                message: 'No user specified'
            })
        }
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        })
    }
}



module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getProduct,
    getByUser
}