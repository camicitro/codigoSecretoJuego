import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { HowToPlayComponent } from '../how-to-play/how-to-play.component';

@Component({
  selector: 'app-lobby',
  imports: [MaterialModule, CommonModule, HowToPlayComponent],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent implements OnInit{

  showRules: boolean = false;

  constructor(private router: Router){}


  ngOnInit(): void {
    
  }

  createGame(){
    const uuid = uuidv4();
    this.router.navigate(['/game', uuid]);
  }

  toggleRules(){
    this.showRules = !this.showRules;
  }

}
