import http from 'http';
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Er4ik');
});
server.listen(`0.0.0.0:${PORT}`, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
