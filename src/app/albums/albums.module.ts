import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { SharedModule } from '../shared/shared.module';
import { FileSystemModule } from '../file-system/file-system.module';

@NgModule({
  imports: [
    CommonModule,
    FileSystemModule
  ],
  declarations: [AlbumsListComponent]
})
export class AlbumsModule { }
