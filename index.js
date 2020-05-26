const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) => {
    res.end('will send all dishes soon! be patient bro!');
});


app.post('/dishes', (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT is not supported here');

});
app.delete('/dishes', (req, res, next) => {
    res.end('Deleting all the dishes');

});

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('will send all dishes soon! be patient bro!' + req.params.dishId);
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /dishes ' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish....' + req.params.dishId + "\n");
    res.end('Will update the  /dishes' + req.body.name + req.body.description);

});
app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting all the dishes' + req.params.dishId);

});





app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>this is express</h1></body></html>');

});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server is runnimg at http://${hostname}:${port}`);

})
