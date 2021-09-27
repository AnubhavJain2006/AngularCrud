import { Observable } from 'rxjs';
import { User } from './../interface/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  baseUrl: string = "http://bootapi.herokuapp.com";
  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    // console.log("Service", user);
    var flag = false;
    this.http.post(this.baseUrl + "/addUser", user).subscribe(response => {

      console.log(response);
      flag = true
      console.log(flag)
      return flag;
    });

  }

}
