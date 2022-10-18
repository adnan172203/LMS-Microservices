const User = require('../models').User;

class Subscriber {
  static async userCreated({ id, name, role, email }) {
    console.log('================= User Created ==================');
    const user = new User({ id, name, role, email });
    await user.save();
  }
}

module.exports = Subscriber;
