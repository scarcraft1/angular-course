import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent, SearchBarComponent, TestComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: ReactiveComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    // component: TestComponent,
    loadChildren: () => import('./views/user/user.module').then(i => i.UserModule)
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
