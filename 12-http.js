const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <h3>We can't find the page you are looking for</h3>
    <a href="/">Back home</a>
  `);
});
server.listen(5000);
