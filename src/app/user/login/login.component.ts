import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  showAlert = false;
  alertMsg = 'Please wait! We are logging you in.';
  alertColor = 'blue';
  inSubmission = false; 

  credentials = {
    email: '',
    password: '',
  };

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created';
    this.alertColor = 'blue';
    this.inSubmission = true;
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      this.alertMsg = 'An unexpected error occured. Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;

      console.error(e)
      return;
    }

    this.alertMsg = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }
}
