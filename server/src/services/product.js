const { Product } = require('./../models/models');

const product = {
    create: async(product) => {
        try {
            const result = await Product.create(product);
            return result;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getAll: async() => {
        try {
            const products = await Product.findAll();
            return products;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getOne: async(id) => {
        try {
            const product = await Product.findAll({
                where: {
                    id: id
                }
            })
            return product;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    deleteOne: async(id) => {
        try {
            const result = await Product.destroy({
                where: {
                    id: id
                }
            });
            return result;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    updateOne: async (id, product) => {
        try {
            const newProduct = await Product.update({
                name: product.name,
                productStatus: product.productStatus,
                expirationDate: product.expirationDate,
                category: product.category,
                quantity: product.quantity,
                producer: product.producer,
                claimedBy: product.claimedBy,
            },
                {
                    where: {
                        id: id
                    }
                })
            return newProduct;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getByUser: async(userEmail) => {
        try {
            const products = await Product.findAll({
                where: {
                    userEmail: userEmail
                }
            })
            return products;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
module.exports = product;
