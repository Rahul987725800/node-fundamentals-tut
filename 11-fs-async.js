const { readFile, writeFile } = require('fs');
// here 'utf8' encoding must be passed
// it returns buffer by default
console.log('start read write');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `\nHere is the result : ${first}, ${second}`,
      {
        flag: 'a',
      },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done read write');
      }
    );
  });
});

console.log('code after read write');
