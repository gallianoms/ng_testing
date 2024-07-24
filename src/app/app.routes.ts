import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListComponent,
  },
  {
    path: 'comments',
    component: CommentListComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
];
