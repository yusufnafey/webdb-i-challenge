const server = require("./server.js");

const PORT = process.env.PORT || 1100;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
