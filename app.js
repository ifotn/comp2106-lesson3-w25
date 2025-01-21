import express from 'express';

// create new express application
const app = express();

// start server
app.listen(3000, () => { console.log('Express running on port 3000'); });