import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  constructor(private coursesStoreService: CoursesStoreService) {}

  ngOnInit(): void {}

  handleAddCourse(event: FormGroup) {
    const formValue = event.value;
    this.coursesStoreService.createCourse({
      ...formValue,
      duration: parseInt(formValue.duration, 10),
    });
  }
}
