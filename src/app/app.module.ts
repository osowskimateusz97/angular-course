import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { CourseFormModule } from './features/course-form/course-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginModule,
    RegistrationModule,
    CourseFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
