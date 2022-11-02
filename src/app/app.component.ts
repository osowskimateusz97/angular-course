import { Component } from '@angular/core';
import MOCK_COURSES from 'src/assets/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  courses = MOCK_COURSES;
  isEditable = true;
  $courseId!: string;

  showCourse($courseId: string) {
    console.log(`Show course with courseId: ${$courseId}`);
  }
  editCourse(courseId: string) {
    console.log(`Editing course with courseId: ${courseId}`);
  }
  deleteCourse(courseId: string) {
    console.log(`Deleting course with courseId: ${courseId}`);
  }
}
