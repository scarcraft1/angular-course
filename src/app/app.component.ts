import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componente = 'angular-course';

  public get data() {
    return this.service.sharedData;
  }

  constructor(private service: SharedService) { }

  changeComponent() {
    const components = ['angular-course','angular-course-2','angular-course-3']
    this.componente = components[Math.floor(Math.random() * components.length)];
  }
}
