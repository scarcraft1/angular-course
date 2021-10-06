import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent, TestComponent, UserEditComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ReactiveComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: TestComponent,
    children: [
      {
        path: ':id/edit-user',
        component: UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
