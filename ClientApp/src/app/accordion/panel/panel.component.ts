import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('panelHeader') panelHeader: any;
  @Input() errorText!: string;//From Gamification Admin Badges
  @Input() imgSrc = ""; 
  @Input() imgSrcFromTeamSkills = ""; 
  @Input() isLocked: boolean = false;
  @Input() isCompleted: boolean = false;
  @Input('editEnable') editEnable = false;
  @Input('completionHeader') completionHeader: any;
  @Input('Coursecount') Coursecount!: string | number;
  @Input('noneTheDisableClass') noneTheDisableClass: any;

  @Input('isShow') isShow = false;
  @Input('isShowRule') isShowRule!: boolean;
  @Output() onToggle = new EventEmitter();
  show = false;
  public isInfoVisible = false;
  @Input() Isdisabled: boolean = false;
  @Input() tobeScrolledTo: string = "";
  @Input() showDandD = false;
  @Input() setsequential = false;
  @Input() showMandatory = false;
  public isCompletedVisible = false;
  @Input() fromTeamSkills!: boolean;
  constructor(public router: Router) {

    

  }
  public isMandatory: boolean = false;

  ngOnChanges() {
    if (this.isShowRule) {
      this.toggle();
    }
    if (this.Coursecount == "0") {
      this.Isdisabled = true;
      //this.show = false;
    }
    else {
      this.Isdisabled = false;
      //this.show = true;
    }
	if (this.isShowRule) {
      this.toggle();
    }
    this.isShow = this.Isdisabled ? false : this.isShow;
    this.show = this.isShow;
    if (typeof this.errorText == 'undefined') {
      // the variable is undefined
        //debugger;
        this.isShow = this.Isdisabled ? false : this.isShow;
        this.show = this.isShow;
    }

  }


  ngOnInit() {

    if (this.router.url === '/preferences') {
      this.isInfoVisible = true;
      this.Coursecount = -1;
    }
    if (this.router.url === '/mylearning') {
      this.isInfoVisible = false;
    }
    if (this.Coursecount == "0") {
      this.Isdisabled = true;
      //this.show = false;
    }
    else {
      this.Isdisabled = false;
      //this.show = true;
    }
    this.isShow = this.Isdisabled ? false : this.isShow;
    this.show = this.isShow;
    //console.log("is Disabled in  " + this.panelHeader + " : " + this.Isdisabled);
    if (this.router.url.indexOf('/viewpathway') >= 0) {
      this.isCompletedVisible = true;
    this.getValOfCompletionHeader();

    }
  }


  ngAfterViewInit() {
    if (this.Coursecount == "0") {
      this.Isdisabled = true;
      //this.show = false;
    }
    else {
      this.Isdisabled = false;
      //this.show = true;
    }
    this.isShow = this.Isdisabled ? false : this.isShow;
    this.show = this.isShow;
    //console.log("is Disabled in  " + this.panelHeader + " : " + this.Isdisabled);
  }


  toggle() {
    if (this.Coursecount != "0") {
      this.show = !this.show;
      this.onToggle.next({
        show: this.show,
      });
      // if (this.show && this.tobeScrolledTo != "")
        // this.mScrollbarService.scrollTo('scrollTo', this.tobeScrolledTo, { scrollInertia: 0 });
    }
  }

  completionHeaderCopy:any;
  numerator!: number;
  denominator!:number;
  getValOfCompletionHeader(){
    this.completionHeaderCopy = this.completionHeader;

    // console.log(this.completionHeaderCopy,"Before");
    this.completionHeaderCopy = this.completionHeaderCopy.replace("Completed", "");
    // console.log(this.completionHeaderCopy,"After");
    this.completionHeaderCopy =  this.completionHeaderCopy.split(/[ / ]/).map((n: any[]) => n[0]).join("");
    this.numerator = <number>this.completionHeaderCopy[0];
    this.denominator = <number>this.completionHeaderCopy[1];

    console.log(this.numerator, this.denominator);


  }
}
