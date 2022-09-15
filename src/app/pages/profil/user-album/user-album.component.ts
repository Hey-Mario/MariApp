import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Album } from 'src/app/Model/album';
import { Photo } from 'src/app/Model/photo';
import { AlbumsService } from 'src/app/Services/albums.service';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit {
  albums: Album[] = []
  photos: Photo[] = []
  precedent: boolean = true;
  suivant: boolean = false;
  userId!: number;
  selectedAlbum = new EventEmitter;
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.activatedRoute.parent?.params.subscribe({
        next: (params) => {
          this.userId = params['id'];
          this.albumService.getMyAlbumsList(params['id']).subscribe(
            (data) => {
              this.albums = data.map(result => {return result})
            }
          );
        }
      })
  }

  goPrecedent(){
    this.precedent = !this.precedent
    this.suivant = !this.suivant
  }
  goSuivant(){
    this.precedent = !this.precedent
    this.suivant = !this.suivant
  }

  goToPhotos(albumId: number){
    const link = ['profile/'+ this.userId +'/albums/' + albumId];
    // this.selectedAlbum.emit(albumId);
    this.router.navigate(link);
  }
}
