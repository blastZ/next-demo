const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  getKeyPair: async () => {
    return {
      pubKey: '',
      privKey: ''
    };
  },
  generate: async (client, { name, manager, type, time }) => {
    const dtstack = {};

    const encrypted = crypto.privateEncrypt(privKey, Buffer.from(JSON.stringify(dtstack)));

    fs.writeFileSync(path.resolve(process.cwd(), './public/dtstack.crt'), encrypted);
  }
};
