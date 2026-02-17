import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLogin } from '../models/login.model';
import { NewUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiLogin = 'https://reqres.in/api/login';
  private apiUser = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<{ token: string }> {
    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json',
    });

    return this.http.post<{ token: string }>(this.apiLogin, user, { headers });
  }

  createUser(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.apiUser, user);
  }
}
