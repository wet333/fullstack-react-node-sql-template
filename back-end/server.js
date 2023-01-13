const express = require("express");
const pg = require("pg");
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // Enable CORS for all routes

// Routes
const routes = require('./routes');
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// Errors Handling
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error response")
});

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});