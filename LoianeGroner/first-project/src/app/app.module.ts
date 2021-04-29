import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  {MyFirstComponent}  from './my-first/my-first.component';
import { MyFisrt2Component } from './my-fisrt2/my-fisrt2.component';



@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFisrt2Component
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
