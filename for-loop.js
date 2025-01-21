import { createServer } from 'node:http';

const server = createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/html' });

   for (let i = 1; i <= 20; i++) {
       res.write(i + '<br />');
       console.log(i);
   }
   res.end();
});

server.listen(3000);