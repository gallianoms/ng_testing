import { CommentService } from './../../services/comment.service';
import { Component, inject, OnInit } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CardComponent],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css',
})
export class CommentListComponent implements OnInit {
  private _commentService = inject(CommentService);
  // public comments$!: Observable<IComment[]>;
  public comments: IComment[] = [];
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
    this._commentService.getComments(this.start, this.limit).subscribe({
      next: (newComments) => {
        this.comments = [...this.comments, ...newComments];
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
}
