// ANGULAR
import { Component, Input, OnInit } from '@angular/core';

// 3Lib PHOTOVIEWER
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'lib-photoviewer',
  templateUrl: './photoviewer.component.html'
})
export class PhotoviewerComponent implements OnInit {
  // VAR
  @Input() public images: {
    title: string;
    src: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {}

  // Preview images
  preview(index: number) {
    const options: PhotoViewer.Options = { index };
    const viewer = new PhotoViewer(this.images, options);
  }

}
