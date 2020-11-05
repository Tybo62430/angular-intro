import { Component, OnInit } from '@angular/core';
import { PlayerService } from "../services/player.service";
import { Player } from "../interfaces/player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  listPlayers:Player[] = []

  constructor( private playerService: PlayerService) { }

  ngOnInit(): void { 
    this.listPlayers = this.playerService.getPlayer()

    console.log(this.listPlayers)
  }

}
