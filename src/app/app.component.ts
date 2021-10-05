import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { User } from './models/user';
import { SharedService } from './services/shared.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  componente = 'angular-course';
  users$?: Observable<any>;
  users: any[] = [];

  public get data() {
    return this.service.sharedData;
  }

  constructor(
    private service: SharedService,
    private usersService: UsersService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.users$ = this.usersService.loadUsers().pipe(
      takeUntil(this.destroy$),
      tap(console.log),
      map((results) => results.map((i: any) => i.name)),
      filter((results) => results.filter((i: any) => i.name?.indexOf('a') >= 0))
    );

    this.usersService
      .loadUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (results: User[]) => {
          this.users = results;
        },
        (error) => {
          console.error(error);
        }
      );
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
