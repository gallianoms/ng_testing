import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { TwainComponent } from './components/twain/twain.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, TwainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'testing';
}
