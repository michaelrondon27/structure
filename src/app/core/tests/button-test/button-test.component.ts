import { Component } from '@angular/core';

@Component({
  selector: 'app-button-test',
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.css'
})
export class ButtonTestComponent {

  clicks = 0;

  buttonClicked() {
    this.clicks++;
  }
}
