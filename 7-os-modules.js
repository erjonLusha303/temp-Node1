const os = require('os')

//ifo about user
const user = os.userInfo()
console.log(user)

//system utime in seconds
console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totlalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);
