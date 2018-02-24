import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'fpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword('ljb@ljb.dk', '123456')
      .then(user => console.log(user));
  }

}
