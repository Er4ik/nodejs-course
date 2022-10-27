import http from 'http';

const PORT = 3000;

const server = http.createServer((req: any, res: any) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Er4ik');
});

server.listen(PORT, 'localhost', () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
