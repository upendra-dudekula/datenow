const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const dateTo = new Date();
  response.send(
    `${dateTo.getDate()}-${dateTo.getMonth() + 1}-${dateTo.getFullYear()}`
  );
});

module.exports = app;
