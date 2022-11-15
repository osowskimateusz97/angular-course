import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseModule } from '../course/course.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [CoursesComponent, CourseListComponent, CourseCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    CourseModule,
    FontAwesomeModule,
  ],
  exports: [CoursesComponent],
})
export class CoursesModule {}
