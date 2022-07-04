const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'course-app',
  brokers: ['host.docker.internal:9092'],
});

let producer = kafka.producer();

module.exports = producer;
