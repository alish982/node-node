const http = require('http')
const { readFile, writeFile } = require('fs').promises

// const getText = path => {
//     return new Promise((resolve, reject) => {
//             readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/new.txt', 'utf8')
        await writeFile('./content/brandnewFile.txt', `this is the text ${first} ${second}`, { flag: 'a' })
        console.log(first,second)
    } catch (error) {
        console.log(error)
    }
}

start()