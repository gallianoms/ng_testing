import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child (buttonClicked)="onButtonClicked($event)"></app-child>
    <p>{{ message }}</p>
  `,
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  message = 'The button has not been clicked yet';

  onButtonClicked(event: string) {
    this.message = event;
  }
}
