const express = require('express');
const router = express.Router();

const { createUser, getAllUsers, updateUser, getUser, login } = require('./../controllers/user');
const { createProduct, getAllProducts, updateProduct, getProduct, deleteProduct ,getByUser} = require('./../controllers/product');

router.get('/user', getAllUsers);
router.get('/user/:email', getUser);
router.post('/user', createUser);
router.put('/user/:email', updateUser);

router.post('/login', login);

router.get('/product', getAllProducts);
router.get('/product/:id', getProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
router.post('/product/user', getByUser);

module.exports = router;