import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  private data?: string;

  setData(value: string): void {
    this.data = value;
  }

  getData(): string | undefined {
    return this.data;
  }
}
