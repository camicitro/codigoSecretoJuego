import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lobby',
  imports: [MaterialModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent implements OnInit{

  constructor(private router: Router){}


  ngOnInit(): void {
    
  }

  createGame(){
    const uuid = uuidv4();
    this.router.navigate(['/game', uuid]);
  }

}
