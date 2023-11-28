//Include os model and create its object
const os= require('os');
//return the cpu architecture
console.log("CPU Architecture: "+ os.arch());
console.log("Free memory:" + os.freemem());
console.log("Total memory:" + os.totalmem());