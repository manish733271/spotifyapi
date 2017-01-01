import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private artistUrl: string; //after routing
  private albumsUrl: string; //after routing
  private albumUrl: string; //after artist routing - all albums thumbnail - album details 

  constructor(private _http: Http) {

   }  

   searchMusic(str:string, type='artist'){
      this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
      return this._http.get(this.searchUrl)
        .map(res=>res.json());    
   }

   getArtist(id:string){
     this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this._http.get(this.artistUrl)
        .map(res=>res.json()); 

   }

   getAlbums(artistId:string){
      this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
      return this._http.get(this.albumsUrl)
        .map(res=>res.json()); 
   }

    getAlbum(id:string){
      this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
      return this._http.get(this.albumUrl)
        .map(res=>res.json()); 
   }
 
}
