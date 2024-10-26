const http = require('http')
const PORT = 8080;
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res)=>{
    // res.write('helloWorld')
    if(req.url === '/favicon.ico') return res.end()
    // res.setHeader('Content-Type', 'text/html')
    const log = `${Date.now()} :${req.url} ,new req received\n`;
    const myurl =url.parse(req.url , true)
    console.log(myurl)

    fs.appendFile('log.txt',log, ()=>{
        switch (myurl.pathname){
            case '/':
                res.end('Hello World')
                break
            case '/about':
                const username = myurl.query.myname
                res.end(`Hi, ${username}`)
                break
            case '/search':
                const search =myurl.query.search_query
                res.end(`search ,${search}`)
                break
            default:
                res.end('404 NOT FOUND')
        }
    })
})

server.listen(PORT , ()=>{
    console.log('server is running on port 8080')
})