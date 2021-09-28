import { UserApiService } from './../../services/user-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user: any;
  constructor(private router: ActivatedRoute, private userApi: UserApiService) { }
  ngOnInit() {
    let userId = this.router.snapshot.params.id;
    // console.log("userId", userId);
    this.userApi.getUserById(userId).subscribe(response => {
      this.user = response;
      console.log(this.user);
    }, error => { console.log(error) }
    );

  }


}
