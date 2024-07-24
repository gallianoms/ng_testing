import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
  heroName = '';

  toTitleCase(str: string): string {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  onHeroNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.heroName = this.toTitleCase(input.value);
  }
}
