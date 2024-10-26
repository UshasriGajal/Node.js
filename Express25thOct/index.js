const express = require('express')
const app = express()
const PORT = 8989
const data = require('./data.json')
const products = data.products

app.use(express.json())

app.post('/api/products',(req, res)=>{
    products.push(req.body)
    res.json(products)
})

app.get('/api/products',(req,res)=>{
    console.log(products)
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const id = req.params.id
    const product = products.find(p => p.id==id)
    res.json(product)
})
app.put('/api/products/:id',(req , res)=>{
    const id = Number(req.params.id)
    const productIndex =products.findIndex((p)=> p.id == id);
    products.splice(productIndex,1,{id:id, ...req.body})
    res.status(201).json({message:'product replace succesfully'})
})

app.patch('/api/products/:id',(req , res)=>{
    const id = Number(req.params.id)
    const productIndex =products.findIndex((p)=> p.id == id);
    products.splice(productIndex,1,{id:id, ...req.body})
    res.status(201).json({message:'product replace succesfully'})
})

app.listen(PORT , ()=>{
    console.log('server is running')
})