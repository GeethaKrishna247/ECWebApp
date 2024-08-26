import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {

  private loadingIndicator = new BehaviorSubject(false);
  currentStatus = this.loadingIndicator.asObservable();

  constructor() { }

  changeStatus(status: boolean) {
    this.loadingIndicator.next(status)
  }

}