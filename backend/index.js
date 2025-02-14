const app = required('express');
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
    cors: true,
    origins: ['*']
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
    console.log('Server is running on port', PORT);
}); 
