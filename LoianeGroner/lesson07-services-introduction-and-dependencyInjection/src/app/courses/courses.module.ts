import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesDatailsComponent } from './courses-datails/courses-datails.component';
import { CoursesService } from './couses.service';


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
  ],
  providers:[CoursesService]
})
export class CoursesModule {  }
