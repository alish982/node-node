const express = require('express')
const app = express();
const { products } = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const {name, serving } = product
        return {name, serving}
    })
    res.json(newProduct)
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleProudct = products.find((product) => product.id === Number(productID))
    if(!singleProudct){
        return res.status(404).send('product doesnot exists')
    }
    return res.json(singleProudct)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProduct = [...products]
    if(search){
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.toLocaleLowerCase().startsWith(search);
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }
    res.status(200).json(sortedProduct)
})

app.use([logger, authorize])
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.send('home')
})

app.get('/about', (req, res) => { 
    res.send('about')
})

app.all('*', (req, res) => {
    res.status(404).json({ error: 'message'})
})
app.listen(3000, ()=> {
    console.log('app is listning at port 3000')
})