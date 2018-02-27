import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  canActivate() {
    return this.authService.isAuthenticated()
      .map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('login');
        } else {
          console.log(this.route);
          if (this.route.routeConfig.path === 'login') {
            this.router.navigateByUrl('albums');
          }
        }
        return isLoggedIn;
      });
  }

}
