import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoricedGuard } from 'src/app/guards/autoriced.guard';
import { UserResolver } from 'src/app/resolvers/user.resolver';
import { UserDetailComponent, UserEditComponent } from './components';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
