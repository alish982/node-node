const express = require('express')
const app = express();
const { readFileSync } = require('fs')
const mongoose = require('mongoose')
const proudctRoute = require('./routes/product.route')
const homepage = readFileSync('./index.html')

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//route
app.use('/api/products', proudctRoute)

app.get('/', (req, res) => {
    res.writeHead(200, {'content' : 'text/html'})
    res.write(homepage)
    res.end()
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})

mongoose.connect('mongodb+srv://alishacharya1217:jSKbjogA3mm2tYeI@mongodbv.pqyla.mongodb.net/?retryWrites=true&w=majority&appName=mongoDBV')
.then(() => console.log('db connencted'))
.catch(() => console.log('connection failed'))

app.listen(5000, () => {
    console.log('app is listning in port 3000')
})