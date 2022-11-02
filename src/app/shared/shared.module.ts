import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, HeaderComponent, InfoComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [ButtonComponent, InfoComponent, HeaderComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule],
  exports: COMPONENTS,
})
export class SharedModule {}
