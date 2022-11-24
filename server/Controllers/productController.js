var db = require("../Database/Connection");

//get all products
exports.getAllProducts = async (req, res, next) => {
    const products = await db.select("*").from("products");
  
    res.status(201).json(products);
  };