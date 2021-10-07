import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  public loadUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  public loadUser(id: number): Observable<User | undefined> {
    return this.loadUsers()
    .pipe(map(users => users.find(i => i.id == id)));
  }

}
