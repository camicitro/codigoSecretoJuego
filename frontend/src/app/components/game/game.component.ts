import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SocketioService } from '../../services/socketio.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ICard } from '../../models/card.interface';

@Component({
  selector: 'app-game',
  imports: [CardComponent, MaterialModule, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  role: string = 'operative';
  gameId: string | null = null;
  //wordsString: string | null = null; 
  words: ICard[] = [];
  
  constructor(private socketioService: SocketioService, private router: ActivatedRoute, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.gameId = this.router.snapshot.paramMap.get('id');
    this.socketioService.connect(this.gameId);
    this.receiveJoinedPlayers();
    this.receiveStartGame();
    this.receiveGameUpdate();
    // Si el jugador es el creador del juego, inicia la partida automáticamente
    if (this.gameId) {
      this.startGame();
    }
  }

  nextGame(){
    this.socketioService.startGame(this.gameId);
  }

  startGame(){
    this.socketioService.startGame(this.gameId);
  }

  receiveJoinedPlayers(){
    this.socketioService.receiveJoinedPlayers().subscribe((message: string) => {
      this.snackbar.open(message, '', {
        duration: 3000
      })
    });
  }

  receiveStartGame(){
    this.socketioService.receiveStartGame().subscribe((words: ICard[]) => {
      this.role = 'operative'
      this.words = words;
      console.log(words);
    });
  }


  receiveGameUpdate(){
    this.socketioService.receiveGameUpdate(this.gameId!).subscribe((words: ICard[])=>{
        this.words = words;
    })
  }

  onWordClicked(word: ICard) {
    const updatedWords = this.words.map(w => {
      if (w === word) {
          return { ...w, selected: true };
      }
      return w;
  });

  this.words = updatedWords;
    this.socketioService.sendGameUpdate(this.gameId!, this.words);
  }
}
