import { Component, Input, OnInit } from '@angular/core';
import { File } from '../shared/file';

@Component({
  selector: 'fpa-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  @Input()
  file: File;
  constructor() { }

  ngOnInit() {
  }

}
