import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { AuthService } from '../../auth/shared/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UserService {

  constructor(private authService: AuthService,
              private afs: AngularFirestore) { }

  getUser(): Observable<User> {
    // Get the AuthUser
    // Get the DBUser - SwitchMap
    // Merge both - Map
    return this.authService.getAuthUser()
      .switchMap(authUser => {
        return this.afs.doc<User>('users/' + authUser.uid).valueChanges()
          .map(dbUser => {
            dbUser.uid = authUser.uid;
            dbUser.email = authUser.email;
            return dbUser;
          });
      });
  }

  update(user: User): Promise<any> {
    return this.afs.doc('users/' + user.uid).set(user);
  }
}
