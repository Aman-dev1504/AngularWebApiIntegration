import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "https://localhost:44375/api/products";
  

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl,httpOptions);
  }

  getProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url,httpOptions);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product,httpOptions);
  }

  // updateProduct(id: number, product: any): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<any>(url, product);
  // }

  // deleteProduct(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<any>(url);
  // }
}
