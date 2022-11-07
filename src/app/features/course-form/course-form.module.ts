import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseFormComponent } from './course-form.component';

@NgModule({
  declarations: [CourseFormComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}
