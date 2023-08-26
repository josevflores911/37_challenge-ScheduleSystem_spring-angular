import { Injectable } from '@angular/core';
import { helper } from './helper'; // Adjust the path based on your project structure

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData() {
    return helper;
  }
}