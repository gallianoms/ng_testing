import { Injectable } from '@angular/core';

type User = {
  name: string;
  age: number;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = false;
  user: User = {} as User;

  login(user: User): void {
    this.isLoggedIn = true;
    this.user = user;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.user = {} as User;
  }

  checkLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
