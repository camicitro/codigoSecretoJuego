import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createGame } from './util/words.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: true,
    origins: ['*']
});


io.on('connection', (socket) => {

    socket.on('startGame', ({ gameId }) => {
        createGame().then(words => {
            io.to(gameId).emit('startGame', words); //mando mensaje a todos
            console.log('Alguien ha comenzado el juego ');
        })
    });

    socket.on('gameUpdate', ({ gameId, words }) => {
        io.to(gameId).emit('gameUpdate', words);

    });
    socket.on('joinGame', ({ gameId }) => {
        socket.join(gameId);
        console.log('Un jugador se ha unido al juego ', gameId);
        socket.to(gameId).emit('joinGame', 'Un nuevo jugador se ha unido');
    });    
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
    console.log('Server is running on port', PORT);
}); 
