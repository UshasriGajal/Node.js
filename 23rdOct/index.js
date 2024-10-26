const http = require('http')
const PORT = 8080
const fs = require('fs')
const url = require('url')

const data = fs.readFileSync('./db.json','utf-8')

const server = http.createServer((req,res)=>{
    const myurl = url.parse(req.url ,true)

    switch(myurl.pathname){
        case '/':
            res.end('HomePage')
            break
        case '/profile':
            const username = myurl.query.myname
            res.end(`Hello ${username}`)
            break
        case'/user':
            res.end(data)
            break
        default:
            res.end('404 port undefined')

    }

})

server.listen(PORT,()=>{
    console.log("Severver is available in PORT 8080")
})