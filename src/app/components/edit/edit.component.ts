import { ToastrService } from 'ngx-toastr';
import { UserApiService } from './../../services/user-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  email: string = "";
  password: string = "";
  name: string = "";
  id: number = 0;
  user: User = {
    id: 0, name: "", email: "", password: ""
  };
  constructor(private routes: Router, private activatedRout: ActivatedRoute, private userApi: UserApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userApi.getUserById(this.activatedRout.snapshot.params.userId).subscribe(response => {
      this.user = response;
      this.id = this.user.id;
      this.email = this.user.email;
      this.name = this.user.name;
      this.password = this.user.password;
    })
  }

  updateUser() {
    this.user = { id: this.id, name: this.name, email: this.email, password: this.password }
    this.userApi.updateUser(this.user).subscribe(response => {
      console.log(response);
      this.toastr.success("Data Updated", "Congratulations", { timeOut: 3000 });
      this.resetForm();
      this.routes.navigateByUrl("");
    }, error => {
      this.toastr.error("Data not updated", "Internal Server Error", { timeOut: 3000 });
    }
    );
  }
  resetForm() {
    this.email = "";
    this.password = "";
    this.name = "";
  }

}
