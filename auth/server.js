var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const producer = require('./kafka/config');
var app = express();

// Load env vars
dotenv.config({ path: './config/.env' });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//kafka producer connect
producer.connect();

//route files
var usersRouter = require('./routes/index');

// Mount routers
app.use('/api/v1/users', usersRouter);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
