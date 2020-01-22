import { NgModule } from '@angular/core';
import { NgxListLibComponent } from './ngx-list-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxListLibIntl } from './ngx-list-lib-intl';
import { NgxListLibItemTemplateDirective } from './ngx-list-lib-item-template.directive';


export function ngxListLibIntlFactory() {
  return new NgxListLibIntl();
}

@NgModule({
  declarations: [NgxListLibComponent, NgxListLibItemTemplateDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [NgxListLibComponent, NgxListLibItemTemplateDirective],
  providers: [
    { provide: NgxListLibIntl, useFactory: ngxListLibIntlFactory }
  ]
})
export class NgxListLibModule { }
