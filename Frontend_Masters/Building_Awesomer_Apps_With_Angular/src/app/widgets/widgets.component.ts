import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  currentWidget: Widget;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.getWidgets();
  }

  getWidgets() {
    this.widgetsService.all().subscribe(widgets => (this.widgets = widgets));
  }
}
