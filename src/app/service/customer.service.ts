import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }

  save (customer: Customer) : Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url+'/customer/insert', customer);
  }

  list() : Observable<Customer[]> {

    return this.http.get<Customer[]>(this.url+'/customer/list')
  
  }

  delete(idCustomer: any) : Observable<Customer> {
    return this.http.delete<Customer>(`${this.url}/customer/delete/${idCustomer}`);
  }

  findById(idCustomer: any): Observable<Customer> {
    return this.http.get<any>(`${this.url}/customer/findCustomer/${idCustomer}`);
  }

}


