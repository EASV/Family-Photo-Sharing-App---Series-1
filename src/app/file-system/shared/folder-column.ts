import { Column } from './column';
import { Folder } from './folder';

export class FolderColumn implements Column {
  displayName: string;
  main: Folder;
  constructor(main: Folder) {
    this.displayName = main.name;
    this.main = main;
  }
}
