import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private players: object[] = [
    { "number": 3, "lastname": "CHIELLINI" },
    { "number": 4, "lastname": "DE LIGT" },
    { "number": 5, "lastname": "ARTHUR" },
    { "number": 6, "lastname": "KHEDIRA" },
    { "number": 7, "lastname": "RONALDO" },
    { "number": 8, "lastname": "RAMSEY" },
    { "number": 9, "lastname": "MORATA" },
    { "number": 10, "lastname": "DYBALA" },
    { "number": 12, "lastname": "ALEX SANDRO" },
    { "number": 13, "lastname": "DANILO" },
    { "number": 14, "lastname": "McKENNIE" },
    { "number": 16, "lastname": "CUADRADO" },
    { "number": 19, "lastname": "BONUCCI" },
    { "number": 22, "lastname": "CHIESA" },
    { "number": 25, "lastname": "RABIO" },
    { "number": 30, "lastname": "BENTANCUR" },
    { "number": 33, "lastname": "BERNARDESCHI" },
    { "number": 44, "lastname": "KULUSEVSKI" }
  ]

  constructor() { }

  getPlayers(){
    return this.players
  }
}
