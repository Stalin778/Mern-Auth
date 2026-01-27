import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import auth from './auth.js';
import http from 'node:http';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*', 
  },
});

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);


  socket.on('chat message',(msg)=>{
    console.log("messag recieved "+msg);
    socket.emit('hello','world');
  })
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT =  9096;
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

