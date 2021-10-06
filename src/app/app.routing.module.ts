import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent, TestComponent, UserEditComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit-user',
    component: UserEditComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
