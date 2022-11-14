import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { EditCourseRoutingModule } from './edit-course-routing.module';
import { CourseFormModule } from '../course-form/course-form.module';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [CommonModule, CourseFormModule, EditCourseRoutingModule],
})
export class EditCourseModule {}
