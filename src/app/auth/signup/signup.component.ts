import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'fpa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private snack: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: '',
      password: '',
      repeatPassword: ''
    });
  }

  signup() {
    const model = this.signupForm.value as User;
    this.authService.signup(model)
      .then(user => {
        this.router.navigateByUrl('albums')
          .then(() => {
            this.snack.open('You are signed up!',
              '',
              {
                duration: 2000
              });
          });
      })
      .catch(error => {
        this.snack.open(error.message, '',
          {
            duration: 5000
          });
      });
  }

}
