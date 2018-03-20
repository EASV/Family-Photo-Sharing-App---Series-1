import { Component, OnInit } from '@angular/core';
import { FolderColumn } from '../../file-system/shared/folder-column';
import { FileColumn } from '../../file-system/shared/file-column';
import { Column } from '../../file-system/shared/column';
import { Folder } from '../../file-system/shared/folder';

@Component({
  selector: 'fpa-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  columns: Column[] = [];

  constructor() { }

  ngOnInit() {
    const folder: Folder = {
      name: 'root', uid: '123',
      subFolders: [
        {name: 'Summer 2017', uid: '123'},
        {name: 'Winter 2017', uid: '123'},
        {name: 'Spring 2017', uid: '123'}
      ],
      files: [
        {displayName: 'Great Day At the Beach1', uid: '123'},
        {displayName: 'Great Day At the Beach2', uid: '123'},
        {displayName: 'Great Day At the Beach3', uid: '123'}
      ]
    };

    const folderColumn: FolderColumn = {
      displayName: folder.name,
      main: folder
    };
    this.columns.push(folderColumn);

    const folder2: Folder = {
      name: 'folde2', uid: '123',
      subFolders: [
        {name: '2011', uid: '123'},
        {name: '2017', uid: '123'},
        {name: '2017', uid: '123'}
      ],
      files: [
        {displayName: 'Great Day At the Ocean', uid: '123'},
        {displayName: 'Great Day At the Ocean3', uid: '123'},
        {displayName: 'Great Day At the Ocean2', uid: '123'}
      ]
    };

    const folderColumn2: FolderColumn = {
      displayName: folder2.name,
      main: folder2
    };
    this.columns.push(folderColumn2);
  }

  folderClicked(folder) {
    console.log('clicked folder: ', folder);
  }
}
