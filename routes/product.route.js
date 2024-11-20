const express = require('express')
const { createProudct, updateProduct, getProductById, deleteProudct, getProduct} = require('../controller/product.controller')
const router = express.Router()

router.post('/', createProudct )
router.put('/:id', updateProduct )
router.get('/:id', getProductById)
router.delete('/:id', deleteProudct)
router.get('/', getProduct)


module.exports = router