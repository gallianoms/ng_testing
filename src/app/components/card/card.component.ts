import { Component, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';
import { IPost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() comment: IComment | null = null;
  @Input() post: IPost | null = null;

  isComment(): boolean {
    return !!this.comment;
  }

  isPost(): boolean {
    return !!this.post;
  }
}
