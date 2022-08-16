import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { JwtService } from '../../services/jwtHandler.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('scrolled', [
      state('top', style({})),
      state('scrolled', style({})),
      transition('top => scrolled', animate('400ms ease')),
      transition('scrolled => top', animate('400ms ease')),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() scrollingElement?: HTMLElement;

  animationState = 'top';

  active = false;
  isFresh = false;
  enabled = true;

  constructor(private readonly jwtService: JwtService) {}

  ngOnInit(): void {
    this.jwtService.isFresh$.subscribe((isFresh) => (this.isFresh = !!isFresh));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['scrollingNativeElement'].currentValue) {
      this.animationState =
        this.scrollingElement?.scrollTop ?? 0 > 20 ? 'scrolled' : 'top';
    }
  }

  toggleMobileMenu = () => (this.active = !this.active);
}
