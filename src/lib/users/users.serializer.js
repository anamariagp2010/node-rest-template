const { Serializer } = require('../../../lib');

class UserSerializer extends Serializer {
  constructor() {
    super({ collectionName: 'users' });

    this.baseFields = ['name', 'email'];

    this.meta = {};
  }
}

module.exports = UserSerializer;
