import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    MatIconModule,
    AngularFirestoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  declarations: [ProfileComponent],
  providers: [
    UserService
  ]
})
export class UserModule { }
