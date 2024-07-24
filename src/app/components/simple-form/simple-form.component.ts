import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { containsAngularValidator } from '../../directives/contains-angular.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css',
})
export class SimpleFormComponent {
  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.simpleForm = this.fb.group({
      textField: ['', [Validators.required, containsAngularValidator()]],
    });
  }

  onSubmit() {
    if (this.simpleForm.valid) {
      console.log('Form Submitted', this.simpleForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
