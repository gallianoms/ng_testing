import { CommentService } from './../../services/comment.service';
import { Component, inject, OnInit } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CardComponent, FilterComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent implements OnInit {
  private commentService = inject(CommentService);
  public comments: IComment[] = [];
  public filteredComments: IComment[] = [];
  public start = 1;
  public limit = 20;
  public loading = false;
  public hasMore = true;

  ngOnInit(): void {
    this.loadComments();
  }

  private loadComments() {
    if (this.loading || !this.hasMore) return;

    this.loading = true;
    this.commentService.getComments(this.start, this.limit).subscribe({
      next: (newComments) => {
        this.comments = [...this.comments, ...newComments];
        this.filterComments('');
        this.start += 20;
        this.loading = false;
        this.hasMore = newComments.length === this.limit;
      },
      error: () => (this.loading = false),
    });
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;

    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) this.loadComments();
  }

  private filterComments(filterText: string) {
    this.filteredComments = this.comments.filter((comment) =>
      comment.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  onFilterTextChanged(filterText: string) {
    this.filterComments(filterText);
  }
}
