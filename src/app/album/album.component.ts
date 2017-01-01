import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../artist';
import { Album } from '../album';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];

  //inject two things in constructor - spotifyservice and activated route
  constructor(
    private _spotifyService:SpotifyService,
    private _route:ActivatedRoute) {
      
   }


  ngOnInit() {
    this._route.params
      .map(params=>params['id'])
      .subscribe((id) =>{
          this._spotifyService.getAlbum(id) 
            .subscribe(a => {
              this.album = a;
            })  
      });
  }

  //   this._route.params
  //     .map(params => params['id'])
  //     .switchMap(id=>this._spotifyService.getArtist(id))
  //     .subscribe(a => this.artist = a)
  // }
}