const { readFileSync, writeFileSync } = require('fs');
// 'utf8' is default
console.log('start read write');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);
writeFileSync(
  './content/result-sync.txt',
  `\nHere is the result : ${first}, ${second}`,
  {
    flag: 'a',
  }
);
console.log('done read write');
console.log('code after read write');
