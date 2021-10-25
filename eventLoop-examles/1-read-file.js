const { readFile } = require('fa');


console.log('starting the first task');
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('complitetd the first task');
})

console.log('starting the second task');