//import { DOCUMENT } from '@angular/platform-browser';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    constructor () { }

    ngOnInit(): void {
    }
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
    //this.document.body.style.overflow = "hidden";
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    //this.document.body.style.overflow = "auto";
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      //this.hide();
    }
  }

}
