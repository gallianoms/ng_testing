import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { MarvelService } from '../../services/marvel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  let marvelService: MarvelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CharacterListComponent],
      providers: [MarvelService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    marvelService = TestBed.inject(MarvelService);

    spyOn(marvelService, 'getCharacters').and.returnValue(
      of({
        data: {
          results: [
            {
              name: 'Character 1',
              thumbnail: { path: 'path1', extension: 'jpg' },
            },
            {
              name: 'Character 2',
              thumbnail: { path: 'path2', extension: 'jpg' },
            },
          ],
          total: 40,
        },
      })
    );

    fixture.detectChanges(); // Dispara ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    expect(component.characters.length).toBe(2);
    expect(component.characters[0].name).toBe('Character 1');
    expect(component.totalItems).toBe(40);
    expect(component.totalPages).toBe(2);
  });

  it('should display character cards', () => {
    const characterCards =
      fixture.nativeElement.querySelectorAll('.character-card');
    expect(characterCards.length).toBe(2);

    expect(characterCards[0].querySelector('h3').textContent).toContain(
      'Character 1'
    );
    expect(characterCards[0].querySelector('img').src).toContain('path1.jpg');

    expect(characterCards[1].querySelector('h3').textContent).toContain(
      'Character 2'
    );
    expect(characterCards[1].querySelector('img').src).toContain('path2.jpg');
  });

  it('should update page on pagination change', () => {
    const paginationComponent = fixture.debugElement.query(
      By.css('app-pagination')
    ).componentInstance;
    paginationComponent.pageChange.emit(2);
    fixture.detectChanges();

    expect(component.currentPage).toBe(2);
    expect(marvelService.getCharacters).toHaveBeenCalledWith(20, 20);
  });
});
