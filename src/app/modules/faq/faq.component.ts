import { Component, OnInit } from '@angular/core';
import { INVITE_URL } from '../../../main';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
})
export class FaqComponent {
  protected readonly INVITE_URL = INVITE_URL;
}

export default FaqComponent;
