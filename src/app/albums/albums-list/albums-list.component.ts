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
      this.addFolder(folder);
    });
  }

  folderClicked(folder) {
    this.folderService.getFolder(folder.uid)
      .first().subscribe(folderDb => {
      this.addFolder(folderDb);
    });
  }

  addFolder(folder: Folder) {
    if (folder) {
      const index = this.columns.findIndex(column => (column as FolderColumn).main.uid === folder.uid);
      if (index !== -1) {
        this.columns.splice(index);
      }
      const folderColumn: FolderColumn = {
        displayName: folder.name,
        main: folder
      };
      this.columns.push(folderColumn);
    }

  }
}
