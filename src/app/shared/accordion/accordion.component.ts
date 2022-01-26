import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  active = false;

  constructor() {}

  ngOnInit(): void {}

  toggleContent = () => {
    console.log(this.active);
    this.active = !this.active;
  };
}
