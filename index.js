const express = require('express');
const path = require('path');
const axios = require('axios');
const https = require('https')
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

////////////////////////////////////////////////
// BASE ENDPOINTS
////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.render('index')
  /*res.sendFile(path.join(__dirname, '/html/index.html'));*/
});

app.get('/terms', (req, res) => {
  res.render('terms')
  /*res.sendFile(path.join(__dirname, '/html/index.html'));*/
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy')
  /*res.sendFile(path.join(__dirname, '/html/index.html'));*/
});

app.get('/team', (req, res) => {
  res.render('team')
  /*res.sendFile(path.join(__dirname, '/html/index.html'));*/
});


////////////////////////////////////////////////
// ERROR PAGES
////////////////////////////////////////////////
app.use(function(req, res, next) {
  res.status(404);

  res.sendFile(path.join(__dirname, '/html/errors/404.html'));

});

app.use(function(req, res, next) {
    res.status(403);
  
    res.sendFile(path.join(__dirname, '/html/errors/403.html'));
  
});

app.listen(port, () => console.log(`Listening on port ${port}.`))
