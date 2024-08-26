import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker'
import { NgScrollbar } from 'ngx-scrollbar';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loadingService: LoadingService){}

  ngOnInit(){
    // this.loadingService.changeStatus(true);
  }
  public liveSearchReload: boolean = true;
  @ViewChild("routerContainer")
  routerContainer!: ElementRef;
  
  public LiveSearchReload() {
    if (this.liveSearchReload == true) {
      this.liveSearchReload = false;
    }
    else {
      this.liveSearchReload = true;
    }
  }
  ReinitScrollBar(state){
    if(state == true){
    // document.body.style.overflowY = "scroll";
    this.routerContainer.nativeElement.style.overflowY = "scroll";
    }
    else{
    // document.body.style.overflowY = "hidden";
    this.routerContainer.nativeElement.style.overflowY = "hidden";

    }
  }

   //Added for Menu Tour--Start
   overlayMode: boolean = true;
   tourMode: boolean = true; currentScreen = 1;
   public isDirectURL: boolean = false;
   public searchString: string = "";
   //Added for Menu tour -- ENd
     // Added for Menu tour-- Start
public total_slide:number=7;

  gotoPrevSlide() {
    if (this.currentScreen > 1)
      this.currentScreen--;
    else
      this.currentScreen = 1;
  }
  gotoNextSlide() {
    if (this.currentScreen < this.total_slide)
      this.currentScreen++;
    else
      this.currentScreen = this.total_slide;
  }
  //Added fro Menu tour --- End


}
