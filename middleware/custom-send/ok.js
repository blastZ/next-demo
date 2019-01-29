module.exports = function(data, message = 'Execute Success', success = true) {
  this.status = 200;
  this.body = {
    message,
    success,
    data
  };
};
