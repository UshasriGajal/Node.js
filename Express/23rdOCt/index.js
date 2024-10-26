const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req , res){
    // console.log(req.url)
    // res.send('hello world')
    res.sendFile('C:/Users/USHASRI/Innomatics/NodeJs/22ndOct/index.html')
    res.json({type:'get'})
})

app.listen(port , ()=>{
    console.log('server is running in 3000')
})