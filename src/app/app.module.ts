import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FlockComponent } from './flock/flock.component';
import { VirtualkbComponent } from './virtualkb/virtualkb.component';
import { PlayerComponent } from './player/player.component';
import { PlayersComponent } from './players/players.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { AjaxComponent } from './ajax/ajax.component';
import {PlayerManagerModule} from './player-manager/player-manager.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarouselComponent,
    GalleryComponent,
    FlockComponent,
    VirtualkbComponent,
    PlayerComponent,
    PlayersComponent,
    PlayerFormComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    PlayerManagerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
