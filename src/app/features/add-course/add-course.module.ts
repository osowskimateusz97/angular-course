import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { AddCourseRoutingModule } from './add-course-routing.module';
import { CourseFormModule } from '../course-form/course-form.module';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, CourseFormModule, AddCourseRoutingModule],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
