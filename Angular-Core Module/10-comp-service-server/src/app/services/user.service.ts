import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Users } from "../models/User";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getUsers():Observable<Users[]> {
    let dataURL: string = 'https://jsonplaceholder.typicode.com/userss';
    return this.httpClient.get<Users[]>(dataURL).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage :  string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occured: ${error.error}`;
      //console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
      errorMessage = `Backend returned code ${error.status}, body was ${error.error}`
    }
    errorMessage += ' \n Something bad happened; please try again later.';
    // Return an observable with a user-facing error message.
    return throwError(errorMessage);
  }

}
