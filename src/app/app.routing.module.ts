import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent, SearchBarComponent, UserDetailComponent, UserEditComponent } from './components';
import { AutoricedGuard } from './guards/autoriced.guard';
import { UserResolver } from './resolvers/user.resolver';

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
        canActivate: [AutoricedGuard],
        component: UserEditComponent,
        data: {
          title: 'Editar',
          roles: ['admin', 'supervisor']
        }
      },
      {
        path: ':id/details',
        component: UserDetailComponent,
        canActivate: [AutoricedGuard],
        data: {
          title: 'Detalles'
        },
        resolve: {
          user: UserResolver
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
