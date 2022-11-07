import { Directive } from '@angular/core';
import { forbiddenEmailValidator } from '../utils/emailValidator';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return forbiddenEmailValidator()(control);
  }
}
