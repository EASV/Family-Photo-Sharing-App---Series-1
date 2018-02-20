import { Component } from '@angular/core';

@Component({
  selector: 'fpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes = [
    {route: '/', title: 'Home', icon: 'home'},
    {route: '/albums', title: 'Albums', icon: 'folder'},
    {route: '/users', title: 'Users', icon: 'event'}
  ];
  navBarOpen = true;

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }
}
