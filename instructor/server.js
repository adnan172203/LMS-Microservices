var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const producer = require('./kafka/config');

var app = express();

// Load env vars
dotenv.config({ path: './config/.env' });

//kafka producer connect

const { Kafka } = require('kafkajs');

const kafkaClient = new Kafka({
  clientId: 'micro-app',
  brokers: ['host.docker.internal:9092'],
});

run().then(
  () => console.log('Dones'),
  (err) => console.log(err)
);

async function run() {
  const consumer = kafkaClient.consumer({
    groupId: 'micro-app',
  });
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//route files
var instructorRouter = require('./routes/index');

// Mount routers
app.use('/api/v1/instructor', instructorRouter);

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
