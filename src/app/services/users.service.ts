import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly URL = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  public loadUsers() {
    return this.http.get(this.URL);
  }

}
