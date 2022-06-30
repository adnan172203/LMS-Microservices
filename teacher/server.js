var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');

var app = express();

// Load env vars
dotenv.config({ path: './config/.env' });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//route files
var courseRouter = require('./routes/index');

// Mount routers
app.use('/api/v1/course', courseRouter);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
