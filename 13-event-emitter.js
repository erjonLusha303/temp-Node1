const EventEmitter = require('events')

const costumEmiter = new EventEmitter()

costumEmiter.on('response', (name, id)=>{
  console.log(`data recived user ${name} with id ${id}`);
})

costumEmiter.on('response', ()=>{
  console.log(`some other data`);
})


costumEmiter.emit('response','john', 22)
