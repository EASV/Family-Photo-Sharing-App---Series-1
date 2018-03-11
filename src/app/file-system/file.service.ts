import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable()
export class FileService {

  constructor(private afso: AngularFireStorage) { }

}
