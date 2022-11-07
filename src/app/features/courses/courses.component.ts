import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import MOCK_COURSES from 'src/assets/mockData';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  @Input() isEditable!: boolean;
  @Input() courses!: typeof MOCK_COURSES;
  @Output() handleShowCourse = new EventEmitter<string>();
  @Output() handleEditCourse = new EventEmitter<string>();
  @Output() handleDeleteCourse = new EventEmitter<string>();

  buttonText = 'Sign in';
  headerBtn = 'Logout';
  editIcon = faEdit;
  deleteIcon = faTrash;

  showCourse($id: string) {
    this.handleShowCourse.emit($id);
  }

  searchCourse(e: string) {
    console.log('search: ', e);
  }

  editCourse($id: string) {
    this.handleEditCourse.emit($id);
  }

  deleteCourse($id: string) {
    this.handleDeleteCourse.emit($id);
  }

  constructor() {}
  ngOnInit(): void {}
}
