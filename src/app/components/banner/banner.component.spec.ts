import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let bannerEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    bannerEl = fixture.nativeElement;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    const h1 = bannerEl.querySelector('h1')!;
    expect(h1.textContent).toContain('Test Tour of Heroes');
  });

  it('should convert hero name to Title Case', () => {
    const input: HTMLInputElement = bannerEl.querySelector('input')!;
    const span: HTMLSpanElement = bannerEl.querySelector('span')!;

    input.value = 'quick BROWN fOx';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(span.textContent).toBe('Quick Brown Fox');
  });
});
