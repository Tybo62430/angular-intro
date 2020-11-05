import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-player-manager',
  templateUrl: './main-player-manager.component.html',
  styleUrls: ['./main-player-manager.component.css']
})
export class MainPlayerManagerComponent implements OnInit {

   equipe:string = 'Recherche par equipe'
   poste:string = 'Recherche par poste'

  constructor() { }

  ngOnInit(): void {
  }

}
