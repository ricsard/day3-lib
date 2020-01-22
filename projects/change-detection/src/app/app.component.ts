import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, forkJoin, of, throwError, BehaviorSubject, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'change-detection';

  list: { id: number; title: string; value: boolean }[]
    = Array.from({length: 10}).map((_, i) => ({ id: i, title: `${i}. teszt`, value: i % 2 === 0}));

  inputValue: string;

  formControl1 = new FormControl('');
  formControl2 = new FormControl('');

  isLoading = false;

  behaviorSubject = new BehaviorSubject<number>(0);
  replaySubject = new ReplaySubject<number>(5);

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    let cnt = 0;
    setInterval(() => this.behaviorSubject.next(cnt++), 1000);

    let cnt2 = 0;
    setInterval(() => this.replaySubject.next(cnt2++), 1000);

    this.isLoading = true;
    this.httpClient.get('https://api.chucknorris.io/jokes/random?category=asdf')
      .pipe(
        finalize(() => this.isLoading = false),
        catchError(x => {
          console.log(x);
          return throwError(x);
        })
      ).subscribe(x => console.log(x));

    forkJoin(
      this.httpClient.get('https://autsoftangular.azurewebsites.net/api/inventory'),
      this.httpClient.get('https://api.chucknorris.io/jokes/random?category=dev')
    ).subscribe(x => console.log(x));

    merge(
      this.formControl1.valueChanges,
      this.formControl2.valueChanges
    ).pipe(debounceTime(500), distinctUntilChanged())
    .subscribe(x => console.log('changed'));
  }

  addItem() {
    this.list.push({
      id: this.list.length,
      title: this.inputValue,
      value: false
    });
    this.list = [...this.list];
  }

  modify() {
    const val = Object.assign({}, this.list[0]);
    val.value = !val.value;
    this.list[0] = val;
  }

  behaviorSubscribe() {
    this.behaviorSubject.subscribe(x => console.log('behavior', x));
  }

  replaySubscribe() {
    this.replaySubject.subscribe(x => console.log('replay', x));
  }
}
