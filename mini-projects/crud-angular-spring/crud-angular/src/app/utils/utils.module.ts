import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonThemeComponent } from './button-theme/button-theme.component';


@NgModule({
  declarations: [ButtonThemeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonThemeComponent
  ]
})
export class UtilsModule { }
