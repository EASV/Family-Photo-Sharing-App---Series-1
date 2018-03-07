import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[fpaUpload]'
})
export class UploadDirective {

  constructor() { }
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    console.log('event; ', event);
  }
}
