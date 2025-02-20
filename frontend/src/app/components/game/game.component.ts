import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SocketioService } from '../../services/socketio.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ICard } from '../../models/card.interface';
import { GameOverComponent } from '../game-over/game-over.component';
import { ColorToTeamPipe } from '../../pipes/color-to-team.pipe';

@Component({
  selector: 'app-game',
  imports: [CardComponent, MaterialModule, CommonModule, GameOverComponent, ColorToTeamPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  role: string = 'operative';
  gameId: string | null = null;
  words: ICard[] = [];
  currentPlayer: string = '';
  winner: string = ''; 
  teamColors: string[] = ['red', 'blue'];
  showGameOver: boolean = false;
  
  constructor(private socketioService: SocketioService, private router: ActivatedRoute, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.gameId = this.router.snapshot.paramMap.get('id');
    this.socketioService.connect(this.gameId);
    this.receiveJoinedPlayers();
    this.receiveStartGame();
    this.receiveGameUpdate();
    if (this.gameId) {
      this.startGame();
    }
  }

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.teamColors.length);
    return this.teamColors[randomIndex];
  }


  nextGame(){
    this.resetGame();
    this.currentPlayer = this.getRandomColor();
    this.socketioService.startGame(this.gameId);
  }

  startGame(){
    this.resetGame();
    this.currentPlayer = this.getRandomColor();
    this.socketioService.startGame(this.gameId);
  }
  receiveJoinedPlayers(){
    this.socketioService.receiveJoinedPlayers().subscribe((message: string) => {
      this.snackbar.open(message, '', {
        duration: 3000
      })
    });
  }

  //TODO: modificar esto para que al principio aparezca solo el boton de comenzar juego 
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
    
    if(this.isGameOver()){
      this.showGameOverPopUp();
    } else {
      this.automTurnsChange(word);
    }
  }

  toggleCurrentPlayer(){
    this.currentPlayer = this.currentPlayer == 'red' ? 'blue' : 'red';
  }

  automTurnsChange(word: ICard){
    if(word.color != this.currentPlayer){
      if(!this.isGameOver()){
        this.toggleCurrentPlayer();
      }
    }
  }
  makeTurnsChange(){
    if(!this.isGameOver()){
      this.toggleCurrentPlayer();
    }
  }

  countSelectedWords(color: string): number{
    return this.words.filter(w => w.selected && w.color == color).length;
  }

  isGameOver(): boolean {
    return (this.countSelectedWords('red') == 8 || this.countSelectedWords('blue') == 8 || this.countSelectedWords('black') > 0);
  }

  showGameOverPopUp(){
      if(this.countSelectedWords('red') == 8){
        this.winner = 'Equipo Rojo';
        this.showGameOver = true;
      } else if(this.countSelectedWords('blue') == 8){
        this.winner = 'Equipo Azul';
        this.showGameOver = true;
      } else {
        this.winner = this.currentPlayer == 'red' ? 'Equipo Azul' : 'Equipo Rojo';
        this.showGameOver = true;
      }
  }

  copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      this.snackbar.open('Enlace copiado al portapapeles', 'Cerrar', {
        duration: 3000,
      });
    }).catch(err => {
      console.error('Error al copiar el enlace: ', err);
      this.snackbar.open('Error al copiar el enlace', 'Cerrar', {
        duration: 3000,
      });
    });
  }

  resetGame(){
    this.showGameOver = false;
    this.currentPlayer = '';
    this.winner = '';
    this.words.forEach(word => word.selected = false);
  }

  toggleGameOverPopUp(){
    this.showGameOver = !this.showGameOver;
  }
}
