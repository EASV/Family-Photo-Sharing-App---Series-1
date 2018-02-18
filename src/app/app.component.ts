import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBarOpen = false;

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }
}
