import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  status:boolean = true ;
  textStatus:string = "ON"
  backgroundColor:string = "#66cf91" ;

  constructor() { }

  changeStatus() {
    this.status = !this.status ;

    if(this.status){
      
      this.backgroundColor = "#66cf91" ;
      this.textStatus = "ON" ;
      console.log("valeur 1");
    }
    else{
      this.backgroundColor = "#D3D3D3" ;
      this.textStatus = "OFF" ;
      console.log("valeur 0");
    }
  }
}
