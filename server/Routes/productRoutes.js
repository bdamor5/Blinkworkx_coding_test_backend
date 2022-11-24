const express = require('express')
const router = express.Router()

const {getAllProducts} = require('../Controllers/productController')

//get all orders
router.get('/',getAllProducts)

module.exports = router