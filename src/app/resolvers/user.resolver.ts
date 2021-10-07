import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User | undefined> {
  constructor(private service: UsersService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<User | undefined> {

      const id = Number(route.paramMap.get('id'));

      return this.service.loadUser(id)
  }
}
