const http = require('http')
const PORT = 8080
const fs = require('fs')

const index = fs.readFileSync('index.html' , 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json' , 'utf-8'))
const product =data.products[0]
console.log(product)
const server = http.createServer((req, res)=>{

    switch(req.url){
        case '/':
            res.setHeader('Content-Type' , 'text/html')
            res.end('Home Page')
            break
        case '/products':
            res.setHeader('Content-Type' ,'application/json')
            res.end(data)
            break
        case '/index':
            res.setHeader('Content-Type' ,'text/html')
            let modifiedIndex = index.replace('**tittle**' , product.title)
            .replace('**price**' , product.tittle).replace('**url**' , product.images)
            res.end(modifiedIndex)
            break
        default:
            res.end('404 page not found')
        
    }

})

server.listen(PORT ,()=>{
    console.log('server run at the port 8080')
})