const fs = require('fs');
// const os = require('os');

// console.log(os)
// console.log(os.cpus().length)


//Synchornous way of writing a file
// fs.writeFileSync("./log.txt", 'hello Nodejs')

// //Async Way
// fs.writeFile("./test.html" , "Hello Async", ()=>{})

// const result = fs.readFileSync('./contact.txt','utf-8' )
// console.log(result)

// fs.readFile('./Contact.txt', 'utf-8', (err, res)=>{
//     if(err){
//         console.log('error',err)
//     }
//     else{
//         console.log(res)
//     }
// })

const writeStream = fs.createWriteStream('output.txt')
// console.log(writeStream)
writeStream.write('another data\n');
writeStream.end('usha')

// writeStream.on('finish',()=>{
//     console.log('finished writing successfully')
// })

// const readStream = fs.createReadStream('output.txt','utf-8')

// readStream.on('data',(chunk)=>{
//     console.log(chunk)
// })

// console.log('yes')