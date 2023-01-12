const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/terms', (req, res) => {
  res.render('terms');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy');
});

app.get('/team', (req, res) => {
  res.render('team');
});

app.get('/invite', (req, res) => {
  res.redirect('https://discord.com/api/oauth2/authorize?client_id=1062736258289369108&permissions=8&scope=applications.commands%20bot');
});

app.get('/support', (req, res) => {
  res.redirect('https://discord.gg/JVGBuVGGQJ');
});


app.use(function(req, res, next) {
  res.status(404);

  res.render('404');
});

app.use(function(req, res, next) {
  res.status(403);
  
  res.render('403')
});

app.listen(port, () => console.log(`Listening on port ${port}.`))
