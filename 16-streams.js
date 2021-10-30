
const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt',
 {highWterMark:90000,
  encoding:'utf8',
  })

//default 64kb
//last buffer: remainder
//highWaterMar: control size
//const stream = createReadStream('./content/big.txt', {highWterMark:90000})
////const stream = createReadStream('./content/big.txt', 'utf8')

stream.on('data', (result)=>{
  console.log(result);
})

stream.on('error', (err)=> console.log(err))