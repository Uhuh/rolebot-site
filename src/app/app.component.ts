import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  faIcon = faBullhorn;
  onActivate() {
    window.scroll(0, 0);
  }

  destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
