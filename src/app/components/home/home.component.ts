import { Observable } from 'rxjs';
import { UserApiService } from './../../services/user-api.service';
import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userApi: UserApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userApi.getAllRecords().subscribe(res => {
      this.users = res;
      console.log(this.users)
    });
  }

  deleteUser(userId: number) {
    console.log(userId)
    this.userApi.deleteUser(userId).subscribe(res => {
      console.log(res);
      let index = this.users.findIndex(user => user.id == userId);
      this.users.splice(index, 1);
      this.toastr.success("Data deleted", "Success", { timeOut: 3000 })
    }, error => {
      console.log(error)
      this.toastr.error("Data not deleted", "Internal server Error", { timeOut: 3000 })
    }
    )

  }


}
