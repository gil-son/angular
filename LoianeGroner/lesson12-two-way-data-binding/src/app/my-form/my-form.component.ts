import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentValue : any = "";
  savedValue : any = "";
  isMouseOver : boolean = false;
  theName : string = "Unnamed";

  person : any = {
    name: 'Cloud',
    age: 20
  }

  address : any = {
    street: 'New Street',
      complement: {
        compA: "near X street" ,
        compB: "after Blue park"
      }
  }

  url: any = 'http://loiane.com';

  urlImage = 'http://lorempixel.com/400/200/sports/';

  courseAngular : boolean = true;

  getValue(){ return 1; }

  getIlikeAngular(){ return true; }

 

  btnClick(){
    alert("...")
  }

  onKeyUp(event:KeyboardEvent){ // event:any
    console.log(event)
    console.log(event.key)
    console.log((<HTMLInputElement>event.target).value)
    this.currentValue = (<HTMLInputElement>event.target).value

    this.saveValue(this.currentValue)

  }

  saveValue(value:KeyboardEvent){
    this.savedValue = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  otherWayToUpdateTheName(event:KeyboardEvent){
      this.theName = (<HTMLInputElement>event.target).value
  }

}
