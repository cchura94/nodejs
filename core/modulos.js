const os = require('os')

console.log(os.platform())
console.log(os.release())
console.log("Memoria Libre:" , os.freemem(), "bytes")
console.log("Memoria Total", os.totalmem(), "bytes")
console.log(os.homedir())
console.log(os.userInfo())
console.log(os.hostname())