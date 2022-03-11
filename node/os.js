const os = require("os");

let myScreenArch = os.arch();
console.log(myScreenArch);

let myCpu = os.cpus();
console.log(myCpu);

let hostName = os.hostname();
console.log(hostName);

let networkInfo = os.networkInterfaces();
console.log(networkInfo);

console.log(os.release());

console.log(os.platform());

console.log(os.type());

console.log(os.totalmem());

let uptimeInHours = os.uptime()/3600 ;
console.log(uptimeInHours);

console.log(os.userInfo());