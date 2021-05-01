import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDatailsComponent } from './courses-datails/courses-datails.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDatailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
