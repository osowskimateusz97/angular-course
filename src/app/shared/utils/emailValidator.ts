import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const emailValid = regex.test(control.value);
    console.log('balblalba');
    return !emailValid ? { emailValid: true } : null;
  };
}
