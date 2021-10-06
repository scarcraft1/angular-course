import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, Subject } from 'rxjs';
import {
  catchError,
  distinctUntilChanged,
  filter,
  map,
  retry,
  startWith,
  switchMap,
  takeUntil
} from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private userId = new BehaviorSubject<number>(NaN);

  public form: FormGroup;

  @Input()
  public set id(val: number) {
    this.userId.next(val);
  }

  constructor(
    fb: FormBuilder,
    private service: UsersService,
    private route: ActivatedRoute) {

    this.form = this.crearFormulario(fb);

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.userId
      .pipe(
        startWith(this.userId.value),
        filter((id) => !isNaN(id)),
        distinctUntilChanged(),
        takeUntil(this.destroy$),
        switchMap((id) => this.service.loadUser(id)),
        retry(2),
        map((user) => {
          if (!user) {
            throw new Error('No existe el usuario');
          } else {
            return user;
          }
        }),
        catchError((error) => {
          console.error(error);
          return of(undefined);
        })
      )
      .subscribe(
        (user) => {
          this.form.reset({
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            username: user?.username,
            website: user?.website,
          });
        },
        (error) => console.error(error)
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  private crearFormulario(fb: FormBuilder) {
    return fb.group({
      name: ['', Validators.required],
      website: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      username: ['', Validators.required],
    });
  }
}
