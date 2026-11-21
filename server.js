const http = require('http');

const port = Number(process.env.PORT) || 3000;

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Hello</title>
  <style>
    body { font-family: sans-serif; margin: 3rem; }
  </style>
</head>
<body>
  <h1>Hello</h1>
  <p>This Armainer sample is running.</p>
</body>
</html>
`;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.end(page);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Hello listening on ${port}`);
});
