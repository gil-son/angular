import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyFormComponent
  ],
  exports:[MyFormComponent]
  ,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MyFormModule { }
