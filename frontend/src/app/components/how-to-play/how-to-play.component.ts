import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  imports: [],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss'
})
export class HowToPlayComponent {

  @Output() close = new EventEmitter<void>();

    closeRules() {
        this.close.emit();
    }
}
