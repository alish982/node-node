const express = require('express')
const app = express()
const auth = require('./router/auth')
let { people } = require('./data')

app.use(express.static('./method-public'))
app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(name) {
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide cusomter name')
})

app.use('./login', auth)
app.put('/api/people/:id', (req, res) => {
    console.log(req.params)
})
app.listen(3000, ()=> {
    console.log('server is listing in port 3000')
})