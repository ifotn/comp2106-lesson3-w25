import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// create new express application
const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'views')));

// create methods that return a response
const hello = ((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World');
    //res.sendFile(__dirname + '/views/hello.html');
});

const goodbye = ((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Goodbye');
    //res.sendFile(__dirname + '/views/goodbye.html');
});

const index = ((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Home');
        //res.sendFile(__dirname + '/views/index.html');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Not Found');
        //res.sendFile(__dirname + '/views/404.html');
    }
});

// set up url dispatching / routing
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/', index);

// start server
app.listen(3000, () => { console.log('Express running on port 3000'); });