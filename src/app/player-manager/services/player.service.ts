import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from "../interfaces/player";
import { switchMap } from 'rxjs/operators';

const API: string = 'http://localhost:3000/players';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  
  private players: Player[] = [];

  constructor(private http: HttpClient) {}

  getPlayer() {     
    this.http
      .get(API)
      .pipe(        
        switchMap((players: Player[]) => players)        
      )
      .subscribe((player: Player) => {
        this.players.push(player);        
      })
      return this.players
  }
}
