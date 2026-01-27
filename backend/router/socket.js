import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  console.log("Total clients:", io.engine.clientsCount);
  console.log("Namespace sockets:", io.of("/").sockets.size);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.log("Socket error:", err.message);
  });
  socket.on('chat message',(msg)=>{
    io.local.emit('chat message',msg);
  })
});

io.engine.on("connection_error", (err) => {
  console.log("Engine error:", err.message);
});

httpServer.listen(3000, () => {
  console.log("Server started on port 3000");
});
