import { Component, Input, OnInit } from '@angular/core';
import { BillDue } from '../dashboard/type';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() data:BillDue;
  constructor() { }

  ngOnInit(): void {
  }

}
