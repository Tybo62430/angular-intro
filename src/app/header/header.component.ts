import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title:string = "APP COMPONENT";
  srcPath = "https://rencontres-woodrise.ch/wp-content/uploads/2019/06/xvlrllfp22o.jpg" ;
  altText = "Une photo de loup" ;
  authenticated:boolean = false ;
  options:string[] = ["red","blue","yellow"];
  borderColor:string = "black" ;

  constructor() { 
    this.updateUI();
   }

   updateUI(){
    setTimeout(() => {
      console.log("Update UI");
      this.title += " updated !"
      this.authenticated = !this.authenticated;
      this.options.push("New Option");
    }, 1000)
  }

  onChange(event:any){
    let value:string = event.target.value;
    this.borderColor = value ;
    console.log(value)
  }

  

}
