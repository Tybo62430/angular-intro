import { Component } from '@angular/core';

const FRUITS_DIR: string = "assets/images/fruits/";
const SPEED: number = 2000; // milliseconds

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{images: string[] = ["cerise.jpg", "pomme.jpg", "kiwi.jpg"];
loadedImage: string = "";
interval: any;

constructor() { }

ngOnInit(): void {
  this.startCarousel();
}

startCarousel() {
  let i: number = 0;
  this.interval = setInterval(() => {
    if (i >= this.images.length) i = 0; // reset de i
    this.loadedImage = FRUITS_DIR + this.images[i];
    i++;
  }, SPEED) 
}

stopCarousel() {
  clearInterval(this.interval);
}

}
