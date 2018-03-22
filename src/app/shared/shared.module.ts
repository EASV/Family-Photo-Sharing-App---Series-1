import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { MarginIconComponent } from './margin-icon/margin-icon.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadDirective } from './directives/upload.directive';
import { FileStorageService } from './storage/file-storage.service';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FolderService } from './db/folder.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [FileStorageService, FolderService]
})
export class SharedModule { }
