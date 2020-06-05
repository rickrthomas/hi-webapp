const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');


// MONGODB_URI ||
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//listener for database connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

//https://tylermcginnis.com/react-router-cannot-get-url-refresh/
//app.get('/*', function(req, res) {
//    res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
//      if (err) {
//        res.status(500).send(err)
//      }
//    })
//  })

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));