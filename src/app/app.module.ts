import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PlayerFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
