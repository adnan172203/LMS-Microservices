const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'instructor-app',
  brokers: ['host.docker.internal:9092'],
});

const producer = kafka.producer();

module.exports = { producer, kafka };
