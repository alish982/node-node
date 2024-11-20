const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./index.html')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write(homepage)
        res.end()
    }
     else if(req.url === '/about'){
        res.writeHead(200, { 'content-type': 'text/html'})
        res.write('<h1>this is about page</h1>')
        res.end()
    }
     else{
        res.writeHead(400, { 'content-type': 'text/html'})
        res.write('<h1>opps page not found</h1>')
        res.end()
    } 
})

server.listen(3000)

const express = require('express')
const path = require('path')
const app = express();

//for accessing index page with javascirpt and css 
app.use(express.static('./navbar-app'))

//dosen't need this if we're accessing static file from a single folder
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.get('/about', (req, res) => {
    res.status(200).send('this is about page')
})

app.all('*', (req, res) => {
    res.status(404).send('page not found<')
})

app.listen(3000, ()=> {
    console.log('app is listning in port 3000')
})