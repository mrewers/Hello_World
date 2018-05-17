import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Widget } from '../../shared';
import { trigger, transition, state, group, style, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
