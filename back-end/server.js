const express = require("express");

const app = express();
const port = 3030;

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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