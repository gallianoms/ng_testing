import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostListComponent } from './post-list.component';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post.interface';
import { Router } from '@angular/router';
import { PaginationComponent } from '../pagination/pagination.component';
import { CardComponent } from '../card/card.component';

// Mock del servicio PostService
const mockPostService = {
  getPosts: jasmine.createSpy('getPosts').and.returnValue(
    of([
      { id: 1, title: 'Post 1', body: 'This is post 1' },
      { id: 2, title: 'Post 2', body: 'This is post 2' },
      // Agrega más posts si es necesario
    ])
  ),
};

// Mock del Router
const mockRouter = {
  url: '/posts',
};

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent, CardComponent],
      declarations: [PostListComponent],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getPosts on PostService and set posts', () => {
    component.ngOnInit(); // Llama a ngOnInit para activar la carga de posts

    // Verifica que getPosts fue llamado
    expect(mockPostService.getPosts).toHaveBeenCalled();

    // Verifica que los datos se han asignado correctamente
    expect(component.posts.length).toBe(2); // O el número de posts que esperas
    expect(component.posts[0].title).toBe('Post 1');
    expect(component.posts[1].title).toBe('Post 2');
  });
});
