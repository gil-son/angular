import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstAComponent } from './first-module/first-a-component';
import { SecondAComponent } from './second-module/second-a/second-a.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FirstAComponent,
    SecondAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
