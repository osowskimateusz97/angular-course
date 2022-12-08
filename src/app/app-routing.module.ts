import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './features/auth/guards/admin.guard';
import { AuthorizedGuard } from './features/auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './features/auth/guards/not-authorized.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    canActivate: [NotAuthorizedGuard],
  },

  {
    path: 'registration',
    loadChildren: () =>
      import('./features/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
    canActivate: [NotAuthorizedGuard],
  },

  {
    path: 'courses',
    loadChildren: () =>
      import('./features/courses/courses.module').then((m) => m.CoursesModule),
    // TODO: UNCOMMENT IT. it's only for testing purpose
    // canLoad: [AuthorizedGuard],
  },

  {
    path: 'courses/add',
    loadChildren: () =>
      import('./features/add-course/add-course.module').then(
        (m) => m.AddCourseModule
      ),
    // TODO: UNCOMMENT IT. it's only for testing purpose
    // canLoad: [AuthorizedGuard],
    // canActivate: [AdminGuard],
  },
  {
    path: 'courses/:id',
    loadChildren: () =>
      import('./features/show-course/show-course.module').then(
        (m) => m.ShowCourseModule
      ),
    // TODO: UNCOMMENT IT. it's only for testing purpose
    // canLoad: [AuthorizedGuard],
  },
  {
    path: 'courses/edit/:id',
    loadChildren: () =>
      import('./features/edit-course/edit-course.module').then(
        (m) => m.EditCourseModule
      ),
    // TODO: UNCOMMENT IT. it's only for testing purpose
    // canLoad: [AuthorizedGuard],
    // canActivate: [AdminGuard],
  },

  {
    path: '**',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
