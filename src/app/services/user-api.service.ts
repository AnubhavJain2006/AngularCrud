import { observable, Observable } from 'rxjs';
import { User } from './../interface/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  baseUrl: string = "http://bootapi.herokuapp.com";
  constructor(private http: HttpClient) { }
  user: any;

  addUser(user: User): Observable<any> {
    // console.log("Service", user);
    // var flag = false;
    return this.http.post(this.baseUrl + "/addUser", user)

  }

  getAllRecords(): Observable<any> {
    return this.http.get(this.baseUrl + "/allUser")
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/deleteById/" + userId);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(this.baseUrl + "/getUserById/" + userId);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + "/updateUser", user);
  }

  authenticate(user: any): Observable<any> {
    return this.http.post(this.baseUrl + "/authenticate", user);
  }
}
