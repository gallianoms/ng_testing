import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  public welcome = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.welcomeMessage();
  }

  public welcomeMessage(): void {
    this.welcome = this.userService.isLoggedIn
      ? 'Welcome, ' + this.userService.user?.name
      : 'Please log in.';
  }
}
