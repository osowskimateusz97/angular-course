import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IGetAuthorsResponse } from '../models/author';
import { IResponse } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  rootUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<IGetAuthorsResponse>(`${this.rootUrl}authors/all`)
      .pipe(map((response) => response.result));
  }

  addAuthor(name: string) {
    return this.http.post<IResponse>(`${this.rootUrl}author/all`, {
      name,
    });
  }
}
