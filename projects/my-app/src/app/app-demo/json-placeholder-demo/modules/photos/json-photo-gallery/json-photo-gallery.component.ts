// ANGULAR
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-photo-gallery',
  templateUrl: './json-photo-gallery.component.html',
  styleUrls: ['./json-photo-gallery.component.scss'],
})
export class JsonPhotoGalleryComponent {
  @Input() public images: {
    title: string;
    src: string;
  }[] = [];
}
