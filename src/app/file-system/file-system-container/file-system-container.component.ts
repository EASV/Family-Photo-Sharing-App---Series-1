import { Component, OnInit } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'fpa-file-system-container',
  templateUrl: './file-system-container.component.html',
  styleUrls: ['./file-system-container.component.css']
})
export class FileSystemContainerComponent implements OnInit {

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
  }

  ngOnInit() {
  }

  deleteImage() {
    console.log('delete the image');
  }
}
