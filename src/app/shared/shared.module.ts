import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, HeaderComponent, InfoComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailDirective } from './directives/email.directive';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { DurationPipe } from './pipes/duration.pipe';

const COMPONENTS = [
  ButtonComponent,
  InfoComponent,
  HeaderComponent,
  EmailDirective,
  DurationPipe,
  CreationDatePipe,
];

@NgModule({
  declarations: [COMPONENTS, CreationDatePipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: COMPONENTS,
})
export class SharedModule {}
