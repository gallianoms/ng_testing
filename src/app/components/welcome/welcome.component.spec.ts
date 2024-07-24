import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../../services/user.service';
import { MockUserService } from '../../mocks/user.service.mock';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService: UserService;
  let welcomeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeComponent],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    welcomeEl = fixture.nativeElement;

    (userService as MockUserService).reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    expect(welcomeEl.textContent).toContain('Welcome');
    expect(welcomeEl.textContent).toContain('Test User');
  });

  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba';
    fixture.detectChanges();
    expect(welcomeEl.textContent).toContain('Bubba');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    expect(welcomeEl.textContent).not.toContain('Welcome');
    expect(welcomeEl.textContent).toMatch(/log in/i);
  });
});
