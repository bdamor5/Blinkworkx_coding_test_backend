var db = require("../Database/Connection");

//create new order
exports.newOrder = async (req, res, next) => {
  // console.log(req.body)

  let selectedProducts = req.body.addedProducts

  console.log(selectedProducts)

  const order = await db("orders").insert({
    orderDescription : req.body.orderDescription,
    createdAt : new Date().toJSON().slice(0,10).split('-').reverse().join('/'),
    productIdArray : JSON.stringify(selectedProducts)
    });

  res.status(201).json(order);
};

//get all orders
exports.getAllOrders = async (req, res, next) => {
  const order = await db.select("*").from("orders");

  res.status(201).json(order);
};

//get an order by id
exports.getSingleOrder = async (req, res, next) => {
  const order = await db.select("*").from("orders").where({ Id: req.params.id });

  res.status(201).json(order);
};

//update an order by id
exports.updateSingleOrder = async (req, res, next) => {
  const order = await db.from("orders").where({ Id: req.params.id }).update(req.body);

  res.status(201).json(order);
};

//delete an order by id
exports.deleteSingleOrder = async (req, res, next) => {
  const order = await db.from("orders").where({ Id: req.params.id }).del();

  res.status(201).json(order);
};
