import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[fpaUpload]'
})
export class UploadDirective {

  constructor() { }
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.preventDefault();
    console.log('Over event; ', event);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {
    event.preventDefault();
    console.log('Leave event; ', event);
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    event.preventDefault();
    console.log('Drop event; ', event);
  }
}
