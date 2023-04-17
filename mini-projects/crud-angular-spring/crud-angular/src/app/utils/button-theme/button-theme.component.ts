import { Component } from '@angular/core';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss']
})
export class ButtonThemeComponent {
  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
}
