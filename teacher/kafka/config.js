const { Kafka } = require('kafkajs');

export const kafka = new Kafka({
  clientId: 'teacher-app',
  brokers: ['localhost:9092'],
});

export const producer = kafka.producer();
