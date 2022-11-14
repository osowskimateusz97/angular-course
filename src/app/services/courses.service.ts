import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ICourse, IGetCourseResponse } from '../models/course';
import { IResponse } from '../models/common';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  rootUrl = 'http://localhost:4000/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<IGetCourseResponse>(`${this.rootUrl}courses/all`)
      .pipe(map((response) => response.result));
  }

  createCourse(newCourse: ICourse) {
    return this.http.post<IResponse>(`${this.rootUrl}courses/add`, {
      ...newCourse,
    });
  }

  editCourse(id: string, updatedCourse: ICourse) {
    return this.http.put<IResponse>(`${this.rootUrl}courses/${id}`, {
      ...updatedCourse,
    });
  }

  getCourse(id: string) {
    return this.http.get<IGetCourseResponse>(`${this.rootUrl}courses/${id}`);
  }

  searchCourse(title: string) {
    const titleParam = title?.trim().length > 0 ? `title=${title}` : '';

    return this.http.get<IGetCourseResponse>(
      `${this.rootUrl}courses/filter?${titleParam}`
    );
  }

  deleteCourse(id: string) {
    return this.http.delete<IResponse>(`${this.rootUrl}courses/${id}`);
  }
}
