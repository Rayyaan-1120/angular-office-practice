import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { Product } from './interfaces/product';
import {catchError,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  url = 'https://fakestoreapi.com/products?limit=5'
  // url = 'https://fakestoreapi.com/proucts?limi5'

// list = [
  //   {id:"1",name:"person 1",age:"20"},
  //   {id:"2",name:"person 2",age:"21"},
  //   {id:"3",name:"person 3",age:"22"},
  //   {id:"4",name:"person 4",age:"23"},
  //   {id:"5",name:"person 5",age:"24"},
  //   {id:"6",name:"person 6",age:"25"},
  // ]

  constructor(private http: HttpClient) { }

  // getList():Array<object> {
  //   return this.list
  // }

  fetchdata() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      //this will retry the request 3 times

      // retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
     
    return throwError(() => new Error("Something Went Wrong"));
  }

}
