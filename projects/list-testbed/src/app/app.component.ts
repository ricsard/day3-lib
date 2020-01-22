import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-testbed';

  listItems = [
    { name: 'Test 1', value: 'X' },
    { name: 'Test 2', value: 'Y' },
    { name: 'Test 1', value: 'X' },
    { name: 'Test 2', value: 'Y' },
    { name: 'Test 1', value: 'X' },
    { name: 'Test 2', value: 'Y' },
    { name: 'Test 1', value: 'X' },
    { name: 'Test 2', value: 'Y' },
    { name: 'Test 1', value: 'X' },
    { name: 'Test 2', value: 'Y' },
  ];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'hu']);
    translate.setDefaultLang('hu');
  }

  toggleLang() {
    this.translate.setDefaultLang(this.translate.defaultLang === 'hu' ? 'en' : 'hu');
  }
}
