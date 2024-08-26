import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input('tabTitle') title!: string;
  @Input('hover') hoverText!: string;
  @Input() isError!: boolean;
  @Input() active!: boolean;
  @Input() sortMenu: any = ["Latest", "Trending", "Most answered", "My activity"];
  @Input('ismandatory') ismandatory!: boolean;
  @Input() isActive: any;
  @Input() background: boolean = false;
  @Input() isshowstar: boolean = false;
  @Input() isCountAvailable: boolean = false;
  @Input() countVal!: number;
  @Input() fromReels: boolean = false;
  @Input() showNotification: boolean = false;
  @Input() fromSubmittedTab: boolean = false;
  ngOnInit() {

  }
}
