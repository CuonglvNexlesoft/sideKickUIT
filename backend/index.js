const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.sockets.emit("chat message", msg);
  });
  socket.on("roll call", msg => {
    console.log(msg);
    io.sockets.emit("roll call", msg);
  });
  socket.on("roll call success", msg => {
    console.log(msg);
    io.sockets.emit("roll call success", msg);
  });
});

server.listen(port, () => console.log("server running on port:" + port));
