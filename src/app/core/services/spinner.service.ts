import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private static counter = 0;

  constructor(private serviceSpinner: NgxSpinnerService) { }

  show(): void {
    if (SpinnerService.counter === 0) {
      this.serviceSpinner.show();
      SpinnerService.counter++;
    }
  }

  hide(): void {
    if (SpinnerService.counter !== 0) {
      this.serviceSpinner.hide();
      SpinnerService.counter--;
    }
  }
}

