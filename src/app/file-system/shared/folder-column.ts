import { Column } from './column';
import { Folder } from './folder';

export class FolderColumn implements Column {
  displayName: string;
  main: Folder;
}
