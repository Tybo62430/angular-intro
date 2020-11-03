import { Component, OnInit } from '@angular/core'

const FRUITS_DIR: string = "assets/images/t-shirts/";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {  
  images: string[] = [FRUITS_DIR + "1.jpg",FRUITS_DIR + "2.jpg",FRUITS_DIR + "3.jpg",FRUITS_DIR + "4.jpg"] ;
  previewImage:string = FRUITS_DIR + "1.jpg" ;

  constructor() { }

  ngOnInit(): void {    
    
  }

  changePreviewImage(image:string){
    this.previewImage = image ;
  }

 

 

}
