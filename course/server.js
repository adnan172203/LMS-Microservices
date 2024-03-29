var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { producer } = require('./kafka/config');
const kafkaConsumer = require('./kafka/consumer');

var app = express();

// Load env vars
dotenv.config({ path: './config/.env' });

// const { Kafka } = require('kafkajs');

// const kafka = new Kafka({
//   clientId: 'micro-app',
//   brokers: ['host.docker.internal:9092'],
// });

// const producer = kafka.producer();

// run().then(
//   () => console.log('Dones'),
//   (err) => console.log(err)
// );

// async function run() {
//   await producer.connect();

//   await producer.send({
//     topic: 'test-topic',
//     messages: [{ value: 'Hello KafkaJS! test' }],
//   });
// }

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

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
