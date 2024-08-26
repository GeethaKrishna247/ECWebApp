import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import {PanelComponent} from './panel/panel.component';
@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit, AfterContentInit {

  @ContentChildren(PanelComponent) panels!: QueryList<PanelComponent>;

  constructor() { }

  ngOnInit() {
  }

  onToggleSubscriber(p: PanelComponent) {
    return (data: { show: any; }) => {
      this.panels.forEach(panel => {
        if (data.show && panel !== p) {
          panel.show = false;
        }
      })
    }
  }

  ngAfterContentInit() {
    let count = 1;
    let paneName = 0;
    let panelSet = false
    this.panels.forEach((panel, i) => {
      //debugger;
      if (panel.Coursecount) {
        panel.onToggle.subscribe(this.onToggleSubscriber(panel))
        if (!panel.Isdisabled) {
          panel.show = i < count;
        }
        else {
          count = count + 1;
          panel.show = false;
        }
      }
      else if (!panel.Coursecount) {
        panel.onToggle.subscribe(this.onToggleSubscriber(panel))
        //panel.show = i < 1;
        if(panel.show){

          panel.show = true;
          if(i!=0){
            this.panels['_results'][0].show = false;
          }

        }
        else{
          panel.show = i < 1;
        }

      }
      if (panel.Coursecount == -1) {
        panel.onToggle.subscribe(this.onToggleSubscriber(panel))
        panel.show = false;
      }
    })
  }

  ngAfterContent: any

}
