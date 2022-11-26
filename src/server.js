const express = require('express');
const morgan = require('morgan');

const app = express();

// For POST request
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

// Routes
app.use('/api', require('./routes/api'))


app.listen(2200, () => {
    console.log('server is listening to http://localhost:2200');
})
