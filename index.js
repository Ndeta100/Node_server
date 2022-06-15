const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/message'){
        res.writeHead(200,{
            'Content-Type':'Application/json'
        })
        res.end(JSON.stringify({
            id:1,
            name:'Ndeta Innocent'
        }))
    }else if(req.url==='/friends'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<body >')
        res.write('<ul>')
        res.write('<li>Melody</li>')
        res.write('<li>Isaac</li>')
        res.write('</ul>')
        res.write('</body')
        res.write('</html>')
        res.end()
    }else{
        req.statusCode=400
        res.end('<h1>Not Found!</h1>')
    }
    
})
const port=process.env.PORT||5000








server.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})