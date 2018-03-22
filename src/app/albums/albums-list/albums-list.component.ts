import { Component, OnInit } from '@angular/core';
import { FolderColumn } from '../../file-system/shared/folder-column';
import { FileColumn } from '../../file-system/shared/file-column';
import { Column } from '../../file-system/shared/column';
import { Folder } from '../../file-system/shared/folder';
import { UserService } from '../../user/shared/user.service';
import { FolderService } from '../../shared/db/folder.service';
import 'rxjs/add/operator/first';

@Component({
  selector: 'fpa-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  columns: Column[] = [];

  constructor(private userService: UserService,
              private folderService: FolderService) { }

  ngOnInit() {
    this.userService.getUser().switchMap(user => {
        return this.folderService.getFolder(user.rootFolder);
      }
    ).first().subscribe(folder => {
      const folderColumn: FolderColumn = {
        displayName: folder.name,
        main: folder
      };
      this.columns.push(folderColumn);
    });
  }

  folderClicked(folder) {
    console.log('clicked folder: ', folder);
  }
}
