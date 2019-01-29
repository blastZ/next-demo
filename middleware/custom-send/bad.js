module.exports = function(message) {
  this.status = 400;
  this.body = {
    message,
    success: false
  };
};
