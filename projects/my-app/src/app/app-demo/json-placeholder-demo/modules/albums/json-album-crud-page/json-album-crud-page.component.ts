// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// RxJS
import { Subscription } from 'rxjs';

// API
import { JsonAlbumService } from '../../../services/json-album.service';
import { JSONAlbum } from '../../../models/json-album.model';
import { JSONPhoto } from '../../../models/json-photo.model';

@Component({
  selector: 'app-json-album-crud-page',
  templateUrl: './json-album-crud-page.component.html',
  styleUrls: ['./json-album-crud-page.component.scss']
})
export class JsonAlbumCrudPageComponent implements OnInit, OnDestroy {
  public albumId: number;
  public data: JSONAlbum;
  public images: {
    title: string;
    src: string;
  }[] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonAlbumService: JsonAlbumService
  ) {}

  ngOnInit(): void {
    // READ PARAMS CHANGE
    this.subscription.add(
      this.activatedRoute.params.subscribe((params: Params) => {
        Object.entries(params).forEach((property: [string, any]) => {
          this[property[0]] = +property[1];
        });
        // this.loadData();
      })
    );
    this.subscription.add(
      this.jsonAlbumService
        .getAlbum(this.albumId.toString())
        .subscribe(() => {})
    );
    this.subscription.add(
      this.jsonAlbumService
        .getAlbumPhotos(this.albumId.toString())
        .subscribe((photos: JSONPhoto[]) => {
          photos.forEach((photo: JSONPhoto) => {
            this.images.push({
              title: photo.title,
              src: photo.url,
            })
          });
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
