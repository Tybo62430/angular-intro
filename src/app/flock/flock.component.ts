import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {
  seePlayers:boolean = false;
  players:object[] = [] ;

  constructor(private playerService: PlayersService) { 
    this.players = this.playerService.getPlayers() ;
  }

  ngOnInit(): void {
  }

}
