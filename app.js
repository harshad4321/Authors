if (process.env.NODE_ENV !== "production") {
    require('dotenv')
}

const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const colors = require('colors');
const userRouter = require('./routers');
const autherRouter = require('./routers/authors');

const conn = require('./config/db');
const app = express()


const PORT = process.env.PORT || 3000;

// middlewares

app.use(cors()) // to access data from another server
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json()) // convert data into json format
// app.use(expresLayout)
var hbs = require('express-handlebars')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/', partialsDir: __dirname + '/views/partials/' }));

app.use(express.static(path.join(__dirname, 'public')));

// db connection
conn.connection.on('connected', (err) => {
    if (err) {
        console.log('SOMETHING WENT WRONG IN DB_CONNECTION'.red);
    } else {
        console.log('CONNECTED TO MONGO DB'.green);
    }
});


// express.Router

app.use('/', userRouter);
app.use('/authors', autherRouter);

app.get('*', (req, res) => {
    res.send('<h1>SOMETHING WENT WRONG CHECK THE ROUTES (404)</h1>');
});
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT localhost:${PORT}`.rainbow);
});

