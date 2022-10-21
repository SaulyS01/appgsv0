import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Proyecto } from "../models/proyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {


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
  CreateProyecto(data: any): Observable<Proyecto> {
    return this.http
      .post<Proyecto>(
        this.baseurl + '/proyectos/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetProyecto(id: any): Observable<Proyecto> {
    return this.http
      .get<Proyecto>(this.baseurl + '/proyectos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET ALL
  GetProyectos(): Observable<Proyecto> {
    return this.http
      .get<Proyecto>(this.baseurl + '/proyectos/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  UpdateProyecto(id: any, data: any): Observable<Proyecto> {
    return this.http
      .put<Proyecto>(
        this.baseurl + '/proyectos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  DeleteProyecto(id: any) {
    return this.http
      .delete<Proyecto>(this.baseurl + '/proyectos/' + id, this.httpOptions)
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
