import { UserService } from '../services/user.service';

export class MockUserService implements Partial<UserService> {
  public isLoggedIn = true;
  public user = { name: 'Test User', age: 30 };

  login() {
    console.log('Mock login called');
  }

  logout() {
    console.log('Mock logout called');
  }

  checkLoginStatus() {
    return true;
  }

  reset() {
    this.isLoggedIn = true;
    this.user = { name: 'Test User', age: 30 };
  }
}
