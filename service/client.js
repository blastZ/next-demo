const crypto = require('crypto');

const CertificateService = require('./certificate');

module.exports = {
  parse: async client => {
    const { privKey } = await CertificateService.getKeyPair();
    const result = JSON.parse(crypto.privateDecrypt(privKey, client).toString());
    return result;
  }
};
