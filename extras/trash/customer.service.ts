import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class CustomerService {

    constructor(private http: HttpClient,private dataService: DataService) {}
    
    getData() {
        return this.dataService.getData();
    }

    
    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};