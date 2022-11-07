import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { ButtonComponent } from 'src/app/shared/components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseComponent],
  imports: [CommonModule, SharedModule],
  exports: [CourseComponent],
})
export class CourseModule {}
