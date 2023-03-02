// ANGULAR
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-album-details',
  templateUrl: './json-album-details.component.html',
  styleUrls: ['./json-album-details.component.scss'],
})
export class JsonAlbumDetailsComponent {

  @Input() public images: {
    title: string;
    src: string;
  }[] = [];

}
