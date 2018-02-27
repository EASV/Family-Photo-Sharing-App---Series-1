import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'fpa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn: boolean;
  @Output()
  navToggle = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated()
      .subscribe(isLogged => {
        this.isLoggedIn = isLogged;
      });
  }

  toggleNav() {
    this.navToggle.emit();
  }

  logout() {
    this.authService.logout();
  }
}
