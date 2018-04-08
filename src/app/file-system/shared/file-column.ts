import { File } from './file';
import { Column } from './column';

export class FileColumn implements Column {
  displayName: string;
  file: File;
  url: string;
}
