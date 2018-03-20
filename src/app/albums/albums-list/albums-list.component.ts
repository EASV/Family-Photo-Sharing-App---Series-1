import { Component, OnInit } from '@angular/core';
import { FolderColumn } from '../../file-system/shared/folder-column';
import { FileColumn } from '../../file-system/shared/file-column';
import { Column } from '../../file-system/shared/column';

@Component({
  selector: 'fpa-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  columns: Column[] = [];

  constructor() { }

  ngOnInit() {
    const folders = [
      {name: 'Summer 2017'},
      {name: 'Winter 2017'},
      {name: 'Spring 2017'}
    ];
    const files = [
      {fileName: 'Great1.jpg', displayName: 'Great Day At the Beach1', created: '2017-10-10', mimeType: 'jpg', size: 1122},
      {fileName: 'Great2.jpg', displayName: 'Great Day At the Beach2', created: '2017-10-11', mimeType: 'jpg', size: 132},
      {fileName: 'Great3.jpg', displayName: 'Great Day At the Beach3', created: '2017-10-12', mimeType: 'jpg', size: 112}
    ];
    const folderColumn: FolderColumn = {
      displayName: 'FolderOne',
      files: files,
      folders: folders
    }
    this.columns.push(folderColumn);

    const files2 = [
      {fileName: 'Great1.jpg', displayName: 'Funny day at the beach', created: '2017-10-10', mimeType: 'jpg', size: 1122}
    ];

    const folders2 = [
      {name: 'Summer is awesome'}
    ];

    const folderColumn2: FolderColumn = {
      displayName: 'FolderTwo',
      files: files2,
      folders: folders2
    };
    this.columns.push(folderColumn2);

    const file = {
      displayName: 'Funny day at the Beach',
      fileName: 'new.jpg',
      created: '10-10-2017',
      mimeType: 'jpg',
      owner: 'dsldjfknsdlnkflds',
      size: 10293
    };
    const url = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    const fileColumn1: FileColumn = {
      displayName: file.displayName,
      file: file,
      url: url
    }

    this.columns.push(fileColumn1);
  }

  folderClicked(folder) {
    console.log('clicked folder: ', folder);
  }
}
