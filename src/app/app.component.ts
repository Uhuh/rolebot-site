import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  onActivate() {
    window.scroll(0, 0);
  }

  @HostListener('document:scroll', ['$event.srcElement.scrollingElement'])
  handleSroll(event: any) {
    this.scrollTop = event?.scrollTop ?? 0;
  }

  destroy$ = new Subject<void>();

  scrollTop = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
