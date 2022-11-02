import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseModule } from '../course/course.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, SharedModule, CourseModule, FontAwesomeModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
