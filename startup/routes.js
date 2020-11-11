const messages = require("../routes/messages");

module.exports = function (app) {
  app.use("/api/messages", messages);
};
