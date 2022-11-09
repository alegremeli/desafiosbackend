import express from 'express'
import fs from 'fs';
import __dirname from './utils.js';
import productsRouter from './routes/products.router.js';

let data = fs.readFileSync("./products.json") 
let products = JSON.parse(data)

const app = express () //Inicio la app

app.use(express.static(__dirname+'/src/public'))
app.use('/api/products', productsRouter); 
app.use(express.json()); //el formato de la información

const server = app.listen(8080,()=>{ //La app empieza a escuchar
    console.log('Esta escuchando el servidor express c:')
})
//Endpoints

app.get("/productos",(req, res)=> { //Devuelve un array con todos los productos disponibles
    res.send(products)
    })

app.get("/productos/productoRandom",(req, res)=> { //Devuelve un producto elegido al azar entre todos los productos disponibles
    let randomProduct = products[Math.floor(Math.random()*products.length)];
        res.send(randomProduct)
})





