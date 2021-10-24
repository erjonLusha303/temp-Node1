//npm global comand
//npm --version
//local dependency -use it only in this particular prject
//npm i <packageName>

//global dependency - use it in any project
//npm istall -g <packageName>

//package.json - manifest file (stores imortant info about project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)


const _ = require('lodash')

const intems = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(intems);
console.log(newItems);
