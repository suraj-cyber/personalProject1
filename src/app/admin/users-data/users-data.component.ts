import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/allServices/register-service.service';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {
  userDt: any;
  constructor(private ser: RegisterServiceService) { }

  ngOnInit(): void {
    this.getUserDt()
  }

  getUserDt(){
    this.ser.getData().subscribe(
      (r)=>{
        this.userDt = r
      },
      (e)=>{console.log(e)}
    )
  }

}
