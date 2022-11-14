import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import MOCK_COURSES from 'src/assets/mockData';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from 'src/app/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Input() isEditable!: boolean;
  @Input() courses!: ICourse[];
  @Output() handleShowCourse = new EventEmitter<string>();
  @Output() handleEditCourse = new EventEmitter<string>();
  @Output() handleDeleteCourse = new EventEmitter<string>();
  editIcon = faEdit;
  deleteIcon = faTrash;

  showCourse($id: string) {
    this.handleShowCourse.emit($id);
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
