const { kafka } = require('./config');
const User = require('../models').User;

run().then(
  () => console.log('Dones'),
  (err) => console.log(err)
);

async function run() {
  const consumer = kafka.consumer({
    groupId: 'micro-app',
  });
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'auth-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value.toString());
      const { id, name, role, email } = value;
      // console.log({
      //   partition,
      //   offset: message.offset,
      //   value: message.value.toString(),
      // });
      const user = new User({ id, name, role, email });
      await user.save();
    },
  });
}
