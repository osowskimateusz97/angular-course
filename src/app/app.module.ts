import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { WINDOW_PROVIDERS } from './features/auth/services/window.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './features/auth/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, AppRoutingModule, HttpClientModule],
  providers: [
    WINDOW_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
