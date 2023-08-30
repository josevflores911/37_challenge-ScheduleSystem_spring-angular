import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { ReplaySubject } from 'rxjs';
import { config } from './config';
@Injectable({ providedIn: 'root' })
export class notificationService {
  private inputToastStream = new ReplaySubject<Message>();
  // tslint:disable-next-line: variable-name
  private _OutputToastStream = this.inputToastStream;
  constructor() {}

  showNormalToast(ev: Message) {
    this.inputToastStream.next(ev);
  }

  showComplexToast() {}

  showSuccessToast(title: string, subtitle?: string) {
    let successMessage: Message = {
      key: config.toastKey.normalToast,
      severity: 'success',
      life: 3500,
      summary: title,
      detail: subtitle ? subtitle : '',
    };
    this.inputToastStream.next(successMessage);
  }
  showErrorToast(title: string, subtitle?: string) {
    let errorMessage: Message = {
      key: config.toastKey.normalToast,
      severity: 'custom',
      summary: title,
      life: 4000,
      closable: true,
      detail: subtitle ? subtitle : 'please, try again later',
    };
    this.inputToastStream.next(errorMessage);
  }
  get receiveToast() {
    return this._OutputToastStream;
  }
}
