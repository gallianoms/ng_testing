import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TwainService } from './../../services/twain.service';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { TwainComponent } from './twain.component';
import { of } from 'rxjs';

describe('TwainComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let getQuoteSpy: jasmine.Spy;
  let quoteEl: HTMLElement;
  let testQuote: string;

  const errorMessage = () => {
    const el = fixture.nativeElement.querySelector('.error');
    return el ? el.textContent : null;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TwainComponent],
      providers: [TwainService],
    }).compileComponents();

    testQuote = 'Test Quote';

    const twainService = TestBed.inject(TwainService);
    getQuoteSpy = spyOn(twainService, 'getQuote').and.returnValue(
      of(testQuote)
    );

    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

    quoteEl = fixture.nativeElement.querySelector('.twain');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show quote after component initialized', () => {
    fixture.detectChanges();
    expect(quoteEl.textContent).toBe(testQuote);
    expect(getQuoteSpy.calls.any()).withContext('getQuote called').toBe(true);
  });
});
