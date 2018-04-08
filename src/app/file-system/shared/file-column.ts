import { File } from './file';
import { Column } from './column';

export class FileColumn implements Column {
  displayName: string;
  file: File;
  url: string;

  constructor(display: string, file: File, url: string) {
    this.displayName = display;
    this.file = file;
    this.url = url;
  }
}
