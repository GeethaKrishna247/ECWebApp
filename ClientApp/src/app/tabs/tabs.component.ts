// / <reference path="../favorites-view/favorites-view.component.ts" />
import { Input,AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterContentInit {
  @Output() sortOptionChanged = new EventEmitter < { tab:string,sortType:string}>();
  public searchedValue: string = "";
  public selectedSort: string = "Latest";
  @Input() isSortVisible: boolean = false;
  public isSearchVisible: boolean = false;
  public isSearchBarVisible: boolean = false;
  public showLoadingIndicator: boolean = false;
  @Input() defaultMenu: any = ["Latest", "Trending"];
  public skillSortMenu: any = ["Latest", "A - Z"];
  public sortMenu: any;
  public tabTitle: string = "";

  public learningFavoriteSortType: string = 'Latest';
  public weConnectSortType: string = 'Latest';
  public skillUpSortType: string = 'Latest';

   //sortMenu: any = ["Latest", "Trending", "Most answered", "My activity"];
  @Input() showFilters:boolean=false;
  @Input() showRemoveIcon:boolean=false;
  @Input() showAddIcon:boolean=false;
  @Input() totalTabToShow!: number;
  @Input() isshowstar: boolean = false;
  showOverflowTabNames = false;
  overFlowTabSelected = '';
  @Output() addTab=new EventEmitter();
  @Output() removeTab=new EventEmitter<number>();

  @Output() onEnterSearchKeywords: EventEmitter<string> = new EventEmitter<string>();
  @Output() onTabAction: EventEmitter<any> = new EventEmitter<any>();
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  public popOverArrow: boolean = false;
  @Input() background: boolean = false;
  @HostListener('document:mousedown', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.classList.contains('dropdownWrapper')) {
      this.popOverArrow = false;
    }
  }
  @HostListener('document:click', ['$event'])
  public documentClick(event: MouseEvent): void {
    // debugger
    const targetElement = event.target as HTMLElement;
    if(!(targetElement.classList.contains('nav-overflow-drpdown') ||targetElement.classList.contains('overflowDrpDownImg') )){
        this.showOverflowTabNames = false;
    }
  }


  constructor(public router: Router) {

  }
  ngOnInit() {

    this.sortMenu = this.defaultMenu;
    if (this.router.url === '/preferences' || this.router.url === '/mylearning') {
      this.isSortVisible = false;
    }
    if (this.router.url === '/favorites') {
      this.isSearchVisible = true;
      this.isSortVisible = true;
    }
    else if (this.router.url === '/social' || (this.router.url.indexOf('/groupHome')> -1)) {
      // this.isSortVisible = true;
      this.background = true;
    }
     
  }
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    } else {
      this.tabs.toArray().forEach(tab => {
        if (tab.active)
          this.selectTab(tab);
      });
    }
  }
  ngAfterContentChecked(){
    let activeTabs = this.tabs.filter((tab) => tab.active);
    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  @Output() currTab=new EventEmitter<string>();

  selectTab(tab: TabComponent) {

    this.isSearchBarVisible = false;
    this.clearSearch();
    this.onEnterSearchKeywords.emit("");
    this.tabTitle = tab.title;
    tab.active = true;
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
    //Sort Menu visible for Skillup
    if (tab.title.indexOf('Skillup') > -1) {
      this.sortMenu = this.skillSortMenu;
    }
    else {
      this.sortMenu = this.defaultMenu;
    }


    this.selectedSort = "Latest";
    if (tab.title.indexOf('Learning Collections') > -1) {
      this.selectedSort = this.learningFavoriteSortType;
    }
    else if (tab.title.indexOf('WeConnect') > -1) {
      this.selectedSort = this.weConnectSortType;
    }
    else if (tab.title.indexOf('Skillup') > -1) {
      this.selectedSort = this.skillUpSortType;
    }
    else if (tab.title.indexOf('Questions') > -1) {
      this.selectedSort = "Latest";
      this.sortMenu = ["Latest", "Trending", "Most answered", "My activity"];
    }
    else if (tab.title.indexOf('Resources') > -1) {
      this.selectedSort = "Latest";
      this.sortMenu = ["Latest", "Trending"];
    }
    if (tab.title != 'Required Learning' && tab.title != 'My Learning Collections' && tab.title != 'Learning History'
      && tab.title.indexOf('Alerts') == -1 && tab.title.indexOf('Approvals') == -1
      && tab.title.indexOf('Learning Collections') == -1 && tab.title.indexOf('WeConnect') == -1 && tab.title.indexOf('Skillup') == -1
       //#Performance of "CIP Client Interview Prep" Page
      && tab.title.toUpperCase().indexOf('QUESTIONS') == -1 && tab.title.toUpperCase().indexOf('RESOURCES') == -1
    )
    {
      // this.selectSort(this.tabTitle, 'Latest')
    }

    if (tab.title.indexOf('Alerts') > -1 || tab.title.indexOf('Approvals') > -1)
    {
      this.isSearchVisible = false;
      this.isSortVisible = false;
    }

    this.currTab.emit(tab.title)
  }

  // getdata(): string {
    // return this.socialserv.tabName;
  // }
  setdata(value: string) {
    // this.socialserv.tabName = value;
  }


  serachBtnClicked(isSearchBarVisible: any) {
    this.isSearchBarVisible = !isSearchBarVisible;
  }

  clearSearch() {
    this.searchedValue = "";
    this.showSearchData(this.searchedValue);
    //this.isSearchBarVisible = false;
  }


  showSearchData(searchVal: any) {

    if (searchVal) {
      if (this.searchedValue.length > 0 || searchVal.key == "Enter") {
        this.onEnterSearchKeywords.emit(this.searchedValue);
        // this.favorite.onEnterFavoriteSearch(this.searchedValue);
      }
      else if (this.searchedValue == "") {
        this.searchedValue = "";
        //this.favorite.onEnterFavoriteSearch(this.searchedValue);
        this.onEnterSearchKeywords.emit(this.searchedValue);
      }
    }
    else {
      this.searchedValue = "";
      //this.favorite.onEnterFavoriteSearch(this.searchedValue);
      this.onEnterSearchKeywords.emit(this.searchedValue);
    }
  }

  public TogglePopoverArrow() {
    this.popOverArrow = !this.popOverArrow;
  }
}
