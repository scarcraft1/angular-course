import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  componente = 'angular-course';
  users$?: Observable<any>;

  public get data() {
    return this.service.sharedData;
  }

  constructor(
    private service: SharedService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersService.loadUsers();
  }

  changeComponent() {
    const components = [
      'angular-course',
      'angular-course-2',
      'angular-course-3',
    ];
    this.componente = components[Math.floor(Math.random() * components.length)];
  }
}
