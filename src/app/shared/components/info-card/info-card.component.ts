import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.sass']
})
export class InfoCardComponent implements OnInit {

  @Input()
  cardTitle: string;

  @Input()
  subTitle: string;

  @Input()
  cardContentTemplate: TemplateRef<any>;

  @Input()
  cardContentTemplateContext: any;

  @Input()
  bootstrapClass: string;

  @Input()
  cardTopImageUrl: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
