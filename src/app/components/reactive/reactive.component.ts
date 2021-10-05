import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  public submitted = false;
  public form: FormGroup;
  public get f() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.form
      .get('nombre')
      ?.valueChanges
      .subscribe((nombre) => {
        if (nombre === 'oscar') {
          this.f.email.disable();
        } else {
          this.f.email.enable();
        }
      });
  }

  public submit() {
    console.log(this.form.status, this.form.errors);
    console.log(this.form.getRawValue());
  }
}
