const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Cấu hình static folder public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger - terminal
app.use(morgan('combined'));

// Configs Template Engine
app.engine('hbs', handlebars({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

// Home, search, contact


// Routes init
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});