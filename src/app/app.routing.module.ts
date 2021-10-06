import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent, SearchBarComponent, TestComponent, UserEditComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ReactiveComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    // component: TestComponent,
    children: [
      {
        path: ':id/edit-user',
        component: UserEditComponent,
        data: {
          title: 'Editar',
          roles: ['admin', 'supervisor']
        }
      }
    ]
  },
  {
    path: '**',
    component: SearchBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
