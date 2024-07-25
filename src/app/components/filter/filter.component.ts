import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() filterTextChanged = new EventEmitter<string>();

  onFilterChange(event: Event) {
    const inputElement = event.target as HTMLInputElement | null;
    if (inputElement) {
      this.filterTextChanged.emit(inputElement.value);
    }
  }
}
