import { LoadService } from './services/load.service';
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { TwainComponent } from './components/twain/twain.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BannerComponent,
    TwainComponent,
    ChildComponent,
    ParentComponent,
    SimpleFormComponent,
    LoadingOverlayComponent,
    CommentListComponent,
    PostListComponent,
    CharacterListComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewChecked {
  public loadService = inject(LoadService);
  private cdr = inject(ChangeDetectorRef);

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
}
