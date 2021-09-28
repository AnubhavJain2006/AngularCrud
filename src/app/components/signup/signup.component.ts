import { UserApiService } from './../../services/user-api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  constructor(private userApi: UserApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  registerData() {
    // console.log(this.name)
    // console.log(this.email)
    // console.log(this.password)
    var user: User = { id: 1, name: this.name, email: this.email, password: this.password };
    console.log(user);
    this.userApi.addUser(user).subscribe(resp => {
      console.log(resp)
      this.toastr.success("Data Inserted Successfully", "Congratulations", { timeOut: 3000 })
    }, error =>
      console.log(error)
    );
    this.name = "";
    this.email = "";
    this.password = ""
  }



}
