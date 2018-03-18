import { Component, Input, OnInit } from '@angular/core';
import { File } from '../shared/file';
import { Folder } from '../shared/folder';

@Component({
  selector: 'fpa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {
  folders: Folder[];
  files: File[];
  file: File;
  url: string;
  constructor() {
    this.file = {
      displayName: 'Funny day at the Beach',
      fileName: 'new.jpg',
      created: '10-10-2017',
      mimeType: 'jpg',
      owner: 'dsldjfknsdlnkflds',
      size: 10293
    };
    this.url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

    this.folders = [
      {name: 'Summer 2017'},
      {name: 'Winter 2017'},
      {name: 'Spring 2017'}
    ];
    this.files = [
      {fileName: 'Great1.jpg', displayName: 'Great Day At the Beach1', created: '2017-10-10', mimeType: 'jpg', size: 1122},
      {fileName: 'Great2.jpg', displayName: 'Great Day At the Beach2', created: '2017-10-11', mimeType: 'jpg', size: 132},
      {fileName: 'Great3.jpg', displayName: 'Great Day At the Beach3', created: '2017-10-12', mimeType: 'jpg', size: 112}
    ];
  }

  ngOnInit() {
  }

  deleteImage() {
    console.log('delete the image');
  }
}
