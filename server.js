const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const http = require("http");

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

// Listening to port
const server = app.listen(port, () => console.log("listening to port: "+server.address().port));