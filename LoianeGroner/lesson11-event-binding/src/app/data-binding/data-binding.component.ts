import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles:[
    `
      .caseTrueThisWillHightLight{
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})

export class DataBindingComponent implements OnInit {

  currentValue : any = "";
  savedValue : any = "";
  isMouseOver : boolean = false;

  url: any = 'http://loiane.com';

  urlImage = 'http://lorempixel.com/400/200/sports/';

  courseAngular : boolean = true;

  getValue(){ return 1; }

  getIlikeAngular(){ return true; }

  constructor() { }

  ngOnInit(): void {
  }

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

}
