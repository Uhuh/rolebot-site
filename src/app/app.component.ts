import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  onActivate() {
    window.scroll(0, 0);
  }

  destroy$ = new Subject<void>();

  constructor() {
    // I don't like this lol
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$)).subscribe(() => {
      const element = document.getElementById('nav-container')

      if (!element) return;

      if (window.scrollY > 5) {
        element.classList.add('scrolled')
      } else {
        element.classList.remove('scrolled')
      }
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
