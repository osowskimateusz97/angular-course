import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../models/course';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject<ICourse[]>([]);
  private isLoading$$ = new BehaviorSubject(false);
  courses$ = this.courses$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable();

  constructor(private courseService: CoursesService) {}

  getAll() {
    const obs = this.courseService.getAll();
    this.isLoading$$.next(true);
    obs.subscribe((data) => {
      this.courses$$.next(data);
      this.isLoading$$.next(false);
    });
  }

  createCourse(newCourse: ICourse) {
    this.isLoading$$.next(true);
    this.courseService
      .createCourse(newCourse)
      .subscribe(() => this.isLoading$$.next(false));
  }

  editCourse(id: string, updatedCourse: ICourse) {
    this.courseService.editCourse(id, updatedCourse);
  }

  searchCourse(title: string) {
    this.courseService.searchCourse(title).subscribe((data) => {
      this.courses$$.next(data.result);
    });
  }

  getCourse(id: string) {
    this.courseService.getCourse(id);
  }

  deleteCourse(id: string) {
    this.courseService
      .deleteCourse(id)
      .subscribe(() => this.isLoading$$.next(false));
  }
}
