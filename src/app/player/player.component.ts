import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../interfaces';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  //@Input() msg: string = "coucou";

  // on autorise l'émission d'un string ou d'un number
  @Output() changeState: EventEmitter<string | number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  injure() {
    this.player.injured = !this.player.injured;
    this.changeState.emit(this.player.lastname);
  }

}
