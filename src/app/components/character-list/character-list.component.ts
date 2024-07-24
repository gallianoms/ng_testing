import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: number = 1;
  totalItems: number = 0;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    const offset = (this.currentPage - 1) * this.itemsPerPage;
    this.marvelService
      .getCharacters(this.itemsPerPage, offset)
      .subscribe((response) => {
        console.log(response);
        this.characters = response.data.results;
        this.totalItems = response.data.total;
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadCharacters();
  }
}
