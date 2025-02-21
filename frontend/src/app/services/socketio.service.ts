import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.prod';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { ICard } from '../models/card.interface';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: Socket;

  constructor() { 
    this.socket = io(environment.SOCKET_ENDPOINT)
  }

  connect(gameId: string | null) {
    if (!this.socket.connected) {
      this.socket = io(environment.SOCKET_ENDPOINT);
    }
    if(gameId){
      this.socket.emit('joinGame', { gameId: gameId});
    }
  }

  startGame(gameId: string | null) {
    this.socket.emit('startGame', { gameId: gameId });
  }

  sendGameUpdate(gameId: string, words: ICard[]) {
    this.socket.emit('gameUpdate', { gameId: gameId, words: words });

  }

  receiveJoinedPlayers(){
    return new Observable<string>((observer) => {
      this.socket.on('joinGame', (message) => {
        observer.next(message);
      })
    })
  }

  receiveStartGame(){
    return new Observable<ICard[]>((observer) => {
      this.socket.on('startGame', (words: ICard[]) => {
        observer.next(words);
      })
    })
  }

  receiveGameUpdate(gameId: string){
    return new Observable<ICard[]>((observer) => {
      this.socket.on('gameUpdate', (words: ICard[]) => {
        observer.next(words);
      })
    })
  }
}
