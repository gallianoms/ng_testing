import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: ` <button (click)="notifyParent()">Click me</button> `,
})
export class ChildComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  notifyParent() {
    this.buttonClicked.emit('Hello from Child Component!');
  }
}
