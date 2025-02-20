import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-over',
  imports: [CommonModule],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss'
})
export class GameOverComponent {
  
  @Input() winner: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() newGame = new EventEmitter<void>();

  showWinner: boolean = false;

  closePopUp() {
    this.close.emit();
  }

  nextGame(){
    this.newGame.emit();
  }
  
}
