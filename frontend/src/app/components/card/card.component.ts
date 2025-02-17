import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICard } from '../../models/card.interface';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  
  @Input() words: ICard[] = [];
  @Input() role: string = 'operative';
  @Output() wordClicked = new EventEmitter<ICard>();

  constructor() { }

  ngOnInit() {
    
  }

  clickWord(word: ICard){
    console.log('Word clicked desde el card', word);
    word.selected = true;
    this.wordClicked.emit(word);
    //TODO: Podria hacer que word.selected = !word.selected; y que para decirle que elige ese toque un boton de ok
  }

  

}
