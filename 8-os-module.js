const os = require('os');
// info about current user
const user = os.userInfo();
// console.log(user);
// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(uptime);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeeMem: os.freemem(),
};
console.log(currentOS);
