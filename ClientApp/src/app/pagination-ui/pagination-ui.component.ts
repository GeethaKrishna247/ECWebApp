import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, ViewChild } from '@angular/core';
// import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Subscription } from 'rxjs';
// import * as $ from 'jquery';
import { NgScrollbar } from 'ngx-scrollbar'
@Component({
  selector: 'app-pagination-ui',
  templateUrl: './pagination-ui.component.html',
  styleUrls: ['./pagination-ui.component.css']
})
export class PaginationUiComponent implements OnInit, OnChanges {

  @Input() entireDataList: any = [];
  @Input() fromManagerView = false;
  pageDataList: any = [];
  pageNumber: number = 1;
  totalPages: number = 1;
  @Input() itemsPerPage = 3;
  @Input() currentPage = 1;
  enteredNumber: number = 1;

  @Output() pageChanges = new EventEmitter<any>();
  @Output() currentPageNoChanges = new EventEmitter<any>();
  @Input() triggerChangeDetection: any[] = [];
  @Input() Flag: string = "";

  errmsg: string = '';
  @ViewChild(NgScrollbar, { static: false }) scrollbarRef!: NgScrollbar;

  constructor() { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.entireDataList.length / this.itemsPerPage);
    this.selectPage(1);
  }

  ngOnChanges() {
    /*    console.log("changed detected", this.entireDataList);*/
    this.pageNumber = this.currentPage;
    this.enteredNumber = this.currentPage;
    this.totalPages = Math.ceil(this.entireDataList.length / this.itemsPerPage);
    this.pageDataList = [...this.entireDataList.slice((this.pageNumber - 1) * this.itemsPerPage,
      this.pageNumber * this.itemsPerPage)];
    this.pageChanges.emit(this.pageDataList);
    this.currentPageNoChanges.emit(this.pageNumber);
  }

  selectPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.pageNumber = page;
      this.enteredNumber = this.pageNumber;
      this.pageDataList = [...this.entireDataList.slice((this.pageNumber - 1) * this.itemsPerPage,
        this.pageNumber * this.itemsPerPage)];
      this.pageChanges.emit(this.pageDataList);
      this.currentPageNoChanges.emit(this.pageNumber);
      if (this.Flag != "MV") {
        setTimeout(() => {
          // this.scrollbarRef.scrollTo({ top: 0, duration: 0 });
          document.body.scrollTo(0,0);
        }, 300);
      }
    }
  }

  validatePageNumber(): boolean {
    if ((this.enteredNumber < 0 || this.enteredNumber > this.totalPages)) {
      this.errmsg = "Page Not Found";
      return true;
    } else
      return true;
  }

  checkForEnterKey(event: any) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 13) {
      this.triggerPageChange();
    }
  }

  triggerPageChange() {
    if ((this.enteredNumber > 0 && this.enteredNumber <= this.totalPages)) {
      this.pageNumber = this.enteredNumber;
      this.selectPage(this.pageNumber);
    }
  }
}
