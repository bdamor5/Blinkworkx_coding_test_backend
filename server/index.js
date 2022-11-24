const express = require('express');
const app = express();

const cors = require('cors');

//imported routes
const orderRoutes = require('./Routes/orderRoutes')
const productRoutes = require('./Routes/productRoutes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//defined routes
app.use('/api/order',orderRoutes);
app.use('/api/product',productRoutes);

//home route
app.get('/',(req,res) =>{
    res.status(200).json({message: 'Blinkworx Coding Test Backend'})
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => console.log(`Server Running on Port : ${PORT}`))