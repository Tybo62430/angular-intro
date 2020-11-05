import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainPlayerManagerComponent } from './main-player-manager/main-player-manager.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [PlayerListComponent, MainPlayerManagerComponent, PlayerFormComponent, FilterComponent],
  imports: [
    CommonModule    
  ],
  exports: [MainPlayerManagerComponent]
})
export class PlayerManagerModule { }
