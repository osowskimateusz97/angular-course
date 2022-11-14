import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCourseComponent } from './show-course.component';
import { ShowCourseRoutingModule } from './show-course-routing.module';

@NgModule({
  declarations: [ShowCourseComponent],
  imports: [CommonModule, ShowCourseRoutingModule],
  exports: [ShowCourseComponent],
})
export class ShowCourseModule {}
