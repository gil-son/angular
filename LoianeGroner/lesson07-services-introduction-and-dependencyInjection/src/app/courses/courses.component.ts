import { Component, OnInit } from '@angular/core';
import { CoursesService} from './couses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  namePortal: string;

  courses: string[];


  constructor(private coursesService : CoursesService) { 
    this.namePortal = "https://loaine.training"; 
    
      // this.courses = new CoursesService().getCourses();

      this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {
  }

}
