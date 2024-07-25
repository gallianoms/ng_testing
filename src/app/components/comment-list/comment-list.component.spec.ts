import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { CommentListComponent } from './comment-list.component';
import { CommentService } from '../../services/comment.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

const mockCommentService = {
  getComments: () => of([]),
};

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        CommentListComponent, // Import the standalone component here
      ],
      providers: [{ provide: CommentService, useValue: mockCommentService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display comment cards', () => {
    component.filteredComments = [
      {
        id: 1,
        postId: 1,
        name: 'Test Comment',
        email: 'test@example.com',
        body: 'This is a comment',
      },
    ];
    fixture.detectChanges();

    const cardElements = fixture.debugElement.queryAll(By.css('.card-body'));
    expect(cardElements.length).toBeGreaterThan(0);

    const firstCardElement = cardElements[0].nativeElement;
    console.log('Card Content:', firstCardElement.textContent); // Debugging output

    // Normalize the text content
    const normalizedText = firstCardElement.textContent
      .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
      .trim();

    // Perform assertions on normalized text
    expect(normalizedText).toContain('ID: 1');
    expect(normalizedText).toContain('Post ID: 1');
    expect(normalizedText).toContain('Name: Test Comment');
    expect(normalizedText).toContain('Email: test@example.com');
    expect(normalizedText).toContain('Body: This is a comment');
  });
});
