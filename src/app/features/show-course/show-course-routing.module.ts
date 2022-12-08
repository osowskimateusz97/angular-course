import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCourseComponent } from './show-course.component';

const routes: Routes = [
  {
    path: '',
    component: ShowCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCourseRoutingModule {}
