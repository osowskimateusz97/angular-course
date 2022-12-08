import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/models/course';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  buttonText = 'Sign in';
  headerBtn = 'Logout';
  courses: ICourse[] = [];
  isEditable = false;
  token =
    'W0k5AHl2slJVKVmZhdV1ORKem8W3vR1aTaiV6IoFGEaQKsfzBA5WHP6ReJIYr8Y7RDTgIKW6UQvcSLor9pypwqKIW2y9ft/2QcKRXVZZznaGHxCi6/GMuBstKW3eHFuWMpmyQpgmmtjKDfhGT8GtSk+0LFqXIqlsWQN6PlWp953bxdyHlVEg4544hy+E3QS2tV1Ups4a50SdxvRhrZmZ3aRS2C1JWTJCxi9X7rAlWBcsQfymt1Hymml3fQhP8HxMcWuN0P0KKXtda/GCehPQTu5CDwuw19Ry+Zy7RXlgNxTWyPCEVdXJwQKzM34omk91R1zU7RoFEKgSFzsFcioE1g==';

  constructor(
    private courseStoreService: CoursesStoreService,
    private userStoreService: UserStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.sessionStorage.setItem('__token__', this.token);
    this.userStoreService.getUser();
    this.courseStoreService.getAll();
    this.courseStoreService.courses$.subscribe((data) => {
      this.courses = data;
    });
    this.userStoreService.isAdmin$.subscribe((data) => {
      this.isEditable = data;
    });
  }

  searchCourse(searchText: string) {
    this.courseStoreService.searchCourse(searchText);
    console.log('search: ', searchText);
  }

  showCourse($courseId: string) {
    console.log(`Show course with courseId: ${$courseId}`);
    this.router.navigate([`courses/${$courseId}`]);
  }

  editCourse(courseId: string) {
    console.log(`Editing course with courseId: ${courseId}`);
    this.router.navigate([`courses/edit/${courseId}`]);
  }

  deleteCourse(courseId: string) {
    if (window.confirm(`deleting course ${courseId}`)) {
      console.log(`Deleting course with courseId: ${courseId}`);
      this.courseStoreService.deleteCourse(courseId);
    }
  }

  addNewCourse() {
    this.router.navigate(['courses/add']);
  }
}
