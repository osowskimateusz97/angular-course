import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserResponse } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  rootUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<IUserResponse>(`${this.rootUrl}users/me`);
  }
}
