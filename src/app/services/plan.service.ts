import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  // Laravel
  //baseurl = 'http://localhost:8000/api';

  // Nodejs
  baseurl = 'http://localhost:4040/api';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // POST
  CreatePlan(data: any): Observable<Plan> {
    return this.http
      .post<Plan>(
        this.baseurl + '/planes/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetPlan(id: any): Observable<Plan> {
    return this.http
      .get<Plan>(this.baseurl + '/planes/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET ALL
  GetPlanes(): Observable<Plan> {
    return this.http
      .get<Plan>(this.baseurl + '/planes/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdatePlan(id: any, data: any): Observable<Plan> {
    return this.http
      .put<Plan>(
        this.baseurl + '/planes/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  DeletePlan(id: any) {
    return this.http
      .delete<Plan>(this.baseurl + '/planes/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
