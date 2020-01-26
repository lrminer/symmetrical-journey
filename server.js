// require('dotenv').config();
const express = require('express');
// const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());

// Static directory
app.use(express.static(path.join(__dirname, './public')));

// Routes
// =============================================================
require('./routes/search')(app);

app.listen(PORT, function() {
  app.emit('app_started');
});

module.exports = app;
