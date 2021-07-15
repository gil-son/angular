import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  namePortal: string;

  courses: string[];

  constructor() { 
    this.namePortal = "https://loaine.training"; 
    this.courses = ['Java', 'Angular'];
  }

  ngOnInit(): void {
  }

}
