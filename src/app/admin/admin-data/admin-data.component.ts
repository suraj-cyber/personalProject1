import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/allServices/register-service.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {
  userDt:any;

  constructor(private ser: RegisterServiceService) { }

  ngOnInit(): void {
    
  }

 

}
