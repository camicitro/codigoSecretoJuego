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
  preselectedWord: ICard | null = null;

  constructor() { }

  ngOnInit() {
    
  }
  /*
  clickWord(word: ICard){
    console.log('Word clicked desde el card', word);
    word.selected = true;
    this.wordClicked.emit(word);
  }*/

  clickWord(word: ICard) {
    if (this.role === 'operative' && !word.selected) {
      this.preselectedWord = word;
    }
  }

  confirmSelection() {
    if (this.preselectedWord) {
      this.wordClicked.emit(this.preselectedWord);
      this.preselectedWord = null;
    }
  }

  cancelSelection(){
    this.preselectedWord = null;
  }

}
