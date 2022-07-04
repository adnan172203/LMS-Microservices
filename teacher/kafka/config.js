const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'teacher-app',
  brokers: ['localhost:9092'],
  connectionTimeout: 3000, // time in ms defauult value is 1000
  requestTimeout: 25000, // defauult 30000 ms
  retry: {
    initialRetryTime: 100,
    retries: 8,
  },
});

const producer = kafka.producer();

module.exports = producer;
