import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
