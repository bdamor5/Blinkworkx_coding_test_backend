const express = require('express')
const router = express.Router()

const {newOrder,getAllOrders,getSingleOrder,updateSingleOrder,deleteSingleOrder} = require('../Controllers/orderController')

//create new order
router.post('/',newOrder)

//get all orders
router.get('/',getAllOrders)

//get an order by id
router.get('/:id',getSingleOrder)

//update an order by id
router.put('/:id',updateSingleOrder)

//delete an order by id
router.delete('/:id',deleteSingleOrder)

module.exports = router