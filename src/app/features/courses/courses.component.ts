import { Component, OnInit } from '@angular/core';
import MOCK_COURSES from 'src/assets/mockData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  buttonText = 'Sign in';
  headerBtn = 'Logout';
  courses = MOCK_COURSES;
  isEditable = true;

  searchCourse(e: string) {
    console.log('search: ', e);
  }
  showCourse($courseId: string) {
    console.log(`Show course with courseId: ${$courseId}`);
  }
  editCourse(courseId: string) {
    console.log(`Editing course with courseId: ${courseId}`);
  }
  deleteCourse(courseId: string) {
    console.log(`Deleting course with courseId: ${courseId}`);
  }
  constructor() {}
  ngOnInit(): void {}
}
