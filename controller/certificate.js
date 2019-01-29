const fs = require('fs');
const path = require('path');

const CertificateService = require('../service/certificate');
const ClientService = require('../service/client');

module.exports = {
  create: async (ctx, next) => {
    try {
      ctx.ok();
    } catch (err) {
      ctx.ok(null, '未知错误', false);
    }
  }
};
