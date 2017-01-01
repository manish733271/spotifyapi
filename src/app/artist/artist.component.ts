import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Artist } from '../artist';
import { Album } from '../album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist[];
  albums: Album[];

  //inject two things in constructor - spotifyservice and activated route
  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute) {
      
   }


  ngOnInit() {
    this._route.params
      .map(params=>params['id'])
      .subscribe((id) =>{
          this._spotifyService.getArtist(id) 
            .subscribe(a => {
              this.artist = a;
            }),

            this._spotifyService.getAlbums(id)
              .subscribe(a => {
                this.albums = a.items;
              })      
      });
  }

  //   this._route.params
  //     .map(params => params['id'])
  //     .switchMap(id=>this._spotifyService.getArtist(id))
  //     .subscribe(a => this.artist = a)
  // }
}

