import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showAlert = false;
  alertMsg = 'Please wait! Your account is being created';
  alertColor = 'blue';

  name = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  email = new UntypedFormControl('', [Validators.required, Validators.email]);
  age = new UntypedFormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new UntypedFormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirm_passowrd = new UntypedFormControl('', [Validators.required]);
  phoneNumber = new UntypedFormControl('', [
    Validators.required,
    Validators.maxLength(13),
    Validators.minLength(10),
  ]);

  registerForm = new UntypedFormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_passowrd: this.confirm_passowrd,
    phoneNumber: this.phoneNumber,
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created';
    this.alertColor = 'blue';
    console.log('register called!', this.registerForm);
  }
}
