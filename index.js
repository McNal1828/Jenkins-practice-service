import {createServer} from 'node:http'
const port = 3000
const server = createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
    res.end('샘플 서버입니다')
})

server.listen(port,()=>{
    console.log(`server running at port ${port}`)
})