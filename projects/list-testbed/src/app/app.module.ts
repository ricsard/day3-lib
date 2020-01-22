import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxListLibModule, NgxListLibIntl } from 'projects/ngx-list-lib/src/public-api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

function ngxListLibIntlFactors(translateService: TranslateService) {
  const intl = new NgxListLibIntl();
  translateService.onDefaultLangChange.subscribe(() => {
    intl.listTitle = translateService.instant('LIST_TITLE');
    intl.listItemHeader = (i) => translateService.instant('LIST_ITEM', { index: i + 1 });
  });
  return intl;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxListLibModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: NgxListLibIntl,
      useFactory: ngxListLibIntlFactors,
      deps: [TranslateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
