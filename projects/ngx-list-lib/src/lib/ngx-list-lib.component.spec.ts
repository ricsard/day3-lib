import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxListLibComponent } from './ngx-list-lib.component';

describe('NgxListLibComponent', () => {
  let component: NgxListLibComponent<any>;
  let fixture: ComponentFixture<NgxListLibComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxListLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxListLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
