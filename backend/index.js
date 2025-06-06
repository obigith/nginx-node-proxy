const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  console.log(`Received request from IP: ${req.headers['x-real-ip']}`);
  res.json({ message: 'Hello from Node.js backend via NGINX proxy!' });
});

// Optional WebSocket handler
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('WebSocket client connected');
  socket.emit('server_message', 'WebSocket Connected!');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening at http://0.0.0.0:${port}`);
});

