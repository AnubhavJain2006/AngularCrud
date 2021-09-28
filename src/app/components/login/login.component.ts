import { ToastrService } from 'ngx-toastr';
import { UserApiService } from './../../services/user-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(private userApi: UserApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  authenticate() {
    var user = { email: this.email, password: this.password };
    this.userApi.authenticate(user).subscribe(response => {
      console.log(response);
      this.toastr.success("Login Successfully", "Bingoo..", { timeOut: 4000 })
      this.resetForm()
    }, error => {
      console.log(error);

    }
    );
  }

  resetForm() {
    this.email = "";
    this.password = "";
  }
}
