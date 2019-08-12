const express = require("express");

const server = express();
const AccountsRouter = require("./accounts/account-router");

server.use(express.json());
server.use("/api/accounts", AccountsRouter);

server.get("/", (req, res) => {
  res.send("<h2>Web DB I Challenge</h2>");
});

module.exports = server;
