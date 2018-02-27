import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'fpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.login('ljb@ljb.dk', '123456')
      .then(() => console.log('Logged In'))
      .catch(error => console.log(error));

    this.authService.logout()
      .then(() => console.log('Logged Out'))
      .catch(error => console.log(error));

    this.authService.isAuthenticated()
      .subscribe(authState => console.log(authState),
                  error2 => console.log(error2),
                        () => console.log('complete'));
  }
}
