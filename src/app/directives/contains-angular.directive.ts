import { Directive } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export function containsAngularValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const containsAngular = control.value?.includes('Angular');
    return containsAngular
      ? null
      : { missingAngular: { value: control.value } };
  };
}

@Directive({
  selector: '[appContainsAngular]',
  standalone: true,
})
export class ContainsAngularDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return containsAngularValidator()(control);
  }
}
