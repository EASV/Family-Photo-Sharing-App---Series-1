import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(authState => console.log(authState),
                  error2 => console.log(error2),
                        () => console.log('complete'));
  }

  login() {
    const loginModel = this.loginForm.value;
    this.authService.login(loginModel.email, loginModel.password)
      .then(() => console.log('Logged In'))
      .catch(error => console.log(error));


  }
}
