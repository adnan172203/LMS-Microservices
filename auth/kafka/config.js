const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'auth-app',
  brokers: ['host.docker.internal:9092'],
});

const producer = kafka.producer();

module.exports = producer;
