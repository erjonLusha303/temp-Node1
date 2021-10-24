//const amount= 12
//if(amount <10){
  //  console.log('small number');
//}
//else{
  //  console.log('large number');
//}

//console.log(__dirname)
//setInterval(()=>{
  //  console.log('hello world');
//},1000)


//Modules

const names = require('./2-modules')
const sayHi = require('./3-utils')
const data = require('./6-alternaive-flavor')
require('./4-mind-granade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)