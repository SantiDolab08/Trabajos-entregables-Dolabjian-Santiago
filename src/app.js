import express from 'express';
import { getProducts, getProductsById } from './prductManager.js';


const app = express();
const port = 3000;

//app.get('/products/:id', (req, res) => {
//    if (!!req.params.id) { 
//        return getProductsById(req.params.id)
//    }else 
//    return getProducts()
//})


app.listen(port, () => {
    console.log(`El servidor Express está escuchando en el puerto ${port}`);
  });