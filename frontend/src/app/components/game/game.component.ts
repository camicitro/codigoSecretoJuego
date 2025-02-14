import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-game',
  imports: [CardComponent, MaterialModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  role: string = 'operative';
  
  constructor() {}

  ngOnInit(): void {}

  nextGame(){

  }

  startGame(){
    
  }
}
