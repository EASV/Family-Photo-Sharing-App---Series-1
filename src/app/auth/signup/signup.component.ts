import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { matchPassword } from '../shared/password.validator';
import { User } from '../../user/shared/user';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, matchPassword()]]
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

  fcErr(fc: string, ec: string, pre?: string[]): boolean {
    if (pre && pre.length > 0) {
      for (let i = 0; i < pre.length; i++) {
        if (this.signupForm.get(fc).hasError(pre[i])) {
          return false;
        }
      }
    }
    return this.signupForm.get(fc).hasError(ec);
  }

}
