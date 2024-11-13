const EventEmitter = require('events')
const customEvent = new EventEmitter()

customEvent.on('response', (name, id) => {
    console.log(`respose with ${name} ${id}`)
})

customEvent.on('response', () => {
    console.log('new logic her')
})

customEvent.emit('response', 'alish', 34)
customEvent.emit('response')