import { Component, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() comment: IComment | null = null;
}
