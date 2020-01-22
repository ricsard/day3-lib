import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

  @Input() item: { id: number; title: string; value: boolean };
  @Input() isOdd: boolean;

  constructor() { }

  ngOnInit() {
  }

  click(index: number) {
    this.item.value = !this.item.value;
  }
}
