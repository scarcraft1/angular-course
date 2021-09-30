import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componente = 'angular-course';
  changeComponent() {
    const components = ['angular-course','angular-course-2','angular-course-3']
    this.componente = components[Math.floor(Math.random() * components.length)];
  }
}
