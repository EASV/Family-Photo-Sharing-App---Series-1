import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDetailsComponent } from './file-details/file-details.component';
import { FileSystemContainerComponent } from './file-system-container/file-system-container.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSpinner } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [FileDetailsComponent, FileSystemContainerComponent],
  providers: [],
  exports: [FileSystemContainerComponent]
})
export class FileSystemModule { }
