import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngxListItemTpl]' })
export class NgxListLibItemTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
