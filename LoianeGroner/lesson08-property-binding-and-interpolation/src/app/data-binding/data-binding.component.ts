import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url: any = 'http://loiane.com';

  urlImage = 'http://lorempixel.com/400/200/sports/';

  courseAngular : boolean = true;

  getValue(){ return 1; }

  getIlikeAngular(){ return true; }

  constructor() { }

  ngOnInit(): void {
  }

}
