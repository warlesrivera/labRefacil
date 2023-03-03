import { Observable } from 'rxjs';
export interface CustomerProtoService {
  GetCustomer(request: CustomerById): Observable<Customer>;
  GetCustomers(request: ReqCustomers): Observable<Customers>;
  storeCustomers(request: ReqBodyCustomer): Observable<Customers>;
}

export interface ReqBodyCustomer {
  name: string;
  address: string;
  phone: string;
  personPrincipal: string;
}
export interface CustomerById {
  id: number;
}

export interface ReqCustomers {}

export interface Customer {
  id: number;
  name: string;
  address: string;
  phone: string;
  personPrincipal: string;
}

export interface Customers {
  page: number;
  limit: number;
  data: Customer[];
}
