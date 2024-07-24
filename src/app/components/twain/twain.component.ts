import { AsyncPipe } from '@angular/common';
import { TwainService } from './../../services/twain.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-twain',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './twain.component.html',
  styleUrl: './twain.component.css',
})
export class TwainComponent implements OnInit {
  public errorMessage = '';
  public quote$!: Observable<string>;

  constructor(private twainService: TwainService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  public getQuote() {
    const id = (Math.floor(Math.random() * 100) + 1).toString(); // generate random id between 1 - 100
    this.quote$ = this.twainService.getQuote(id).pipe(
      startWith('...'),
      catchError((err: any) => {
        this.errorMessage = err.message || err.toString();
        return of('...');
      })
    );
  }
}
