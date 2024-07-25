import { Component, inject, OnInit } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post.interface';
import { CardComponent } from '../card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PaginationComponent, CardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  private _postService = inject(PostService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  private currentRoute = '';
  posts: IPost[] = [];
  public paginatedData: IPost[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 10;
  public totalPages: number = 1;

  ngOnInit(): void {
    // this._route.url.subscribe((url) => {
    //   this.currentRoute = url[0].path;
    // });
    this.updateCurrentRoute();
    this.loadPosts();
  }

  private updateCurrentRoute(): void {
    this.currentRoute = this.router.url.split('/').pop()!;
  }

  private loadPosts() {
    this._postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
      this.setPaginatedData();
    });
  }

  setPaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.posts.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.setPaginatedData();
  }
}

// ? EN CASO QUE SOLO VENGAN ALGUNOS ELEMENTOS POR PAGINA Y NO TODO EL ARREGLO
// import { Component, OnInit } from '@angular/core';
// import { MarvelService } from '../marvel.service';

// @Component({
//   selector: 'app-character-list',
//   templateUrl: './character-list.component.html',
//   styleUrls: ['./character-list.component.css']
// })
// export class CharacterListComponent implements OnInit {
//   characters: any[] = [];
//   currentPage: number = 1;
//   itemsPerPage: number = 20;
//   totalPages: number = 1;
//   totalItems: number = 0;

//   constructor(private marvelService: MarvelService) { }

//   ngOnInit(): void {
//     this.loadCharacters();
//   }

//   loadCharacters(): void {
//     const offset = (this.currentPage - 1) * this.itemsPerPage;
//     this.marvelService.getCharacters(this.itemsPerPage, offset).subscribe(response => {
//       this.characters = response.data.results;
//       this.totalItems = response.data.total;
//       this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//     });
//   }

//   onPageChange(page: number): void {
//     this.currentPage = page;
//     this.loadCharacters();
//   }
// }

// ? EL SERVICIO
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MarvelService {
//   private apiUrl = 'https://gateway.marvel.com/v1/public/characters';
//   private apiKey = 'your_api_key_here'; // Reemplaza con tu clave API de Marvel

//   constructor(private http: HttpClient) { }

//   getCharacters(limit: number, offset: number): Observable<any> {
//     const params = {
//       apikey: this.apiKey,
//       limit: limit.toString(),
//       offset: offset.toString()
//     };
//     return this.http.get<any>(this.apiUrl, { params });
//   }
// }
