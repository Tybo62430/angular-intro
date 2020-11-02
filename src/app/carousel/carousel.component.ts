import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{

  photoSrc = "" ;

  photos:string[] = [
    "https://ae01.alicdn.com/kf/HTB1IfHrQFXXXXcgaXXXq6xXFXXXV/tui-de-compteur-arri-re-pour-Yamaha-FZ6-FZ6N-2007-08-09-2010-FZ1-FZ1N.jpg",
    "https://lh3.googleusercontent.com/proxy/ijTsAbf6nAfT7LfzQ3SfOUIZy3fUV7Tjupl2iUxGbs3mUudd_Vf-dP5NN-y-XeOPvJ5qQpBzypm9s2-WBvlHGEqVC44XpEHEHa0D-PS4yBR8DSlItlErhShEHlor_pcyt1IbPNUjoxnXDRQ3T3k",
    "https://www.ledperf.com/images/models/ledperf.com/2642_yamaha-mt-07-2018-2018.jpg",
    "https://www.audemar.com/18026-large_default/mt-09.jpg"
  ];

  constructor() { 
    this.carousel()
  }

  async carousel(){
   this.photos.forEach((element,i) => {
    setTimeout(() => {
      this.photoSrc = element;
    }, i * 1*1000);       
   });
  }
    
    
 



  
}
