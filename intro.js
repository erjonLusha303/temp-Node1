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


const {readFile, writeFile} = require('fs').promises
//or you can use the method commented below
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grnade.txt',
         `THis is okey: ${first} ${second}`,
         {flag: 'a'}
         )
        console.log(first, second);
    } catch (error) {
        console.log(error);
        
    }
}

start()


//const getTxt = (path) =>{
    //return new Promise((resolve, reject) =>{
        //readFile(path, 'utf8', (err, data)=>{
            //if(err){
            //    reject(err);
          //  }else{
        //        resolve(data)
      //      }
        
    //    })

  //  })
//}





//getTxt('./content/first.txt')
//.then(result =>console.log(result)
//.catch(err=> console.log(err)))






