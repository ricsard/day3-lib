import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';
import { NgxListLibIntl } from './ngx-list-lib-intl';
import { NgxListLibItemTemplateDirective } from './ngx-list-lib-item-template.directive';

@Component({
  selector: 'ngx-list-lib',
  templateUrl: './ngx-list-lib.component.html',
  styleUrls: ['./ngx-list-lib.component.css'],
  animations: [
    trigger('listItem', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(120px)'}),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@listItem', stagger(50, animateChild()))
      ]),
    ])
  ]
})
export class NgxListLibComponent<T> implements OnInit {

  @Input() items: T[];

  @ContentChild(NgxListLibItemTemplateDirective, { read: TemplateRef, static: false })
  itemTemplate: TemplateRef<any>;

  constructor(public intl: NgxListLibIntl) { }

  ngOnInit() {
  }

}
