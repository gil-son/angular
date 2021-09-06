import { Component, OnInit } from '@angular/core';
// This use TypeScript, so don't need create the source component, but import
@Component({
    selector:'first-a-component',
    templateUrl: './first-a.component.html'
    
}) 



export class FirstAComponent implements OnInit {

    constructor() { }
  
    ngOnInit(): void {
    }
  
  }