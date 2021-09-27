import { UserApiService } from './../../services/user-api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  flag: any = 1;
  constructor(private userApi: UserApiService) { }

  ngOnInit(): void {
  }

  registerData() {
    // console.log(this.name)
    // console.log(this.email)
    // console.log(this.password)
    var user: User = { name: this.name, email: this.email, password: this.password };
    console.log(user);
    this.flag = false;
    var flag1 = this.userApi.addUser(user);
    if (flag1)
      this.flag = false;
  }



}
