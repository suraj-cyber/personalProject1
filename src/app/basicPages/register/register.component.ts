import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/allServices/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: any;

  constructor(private route: Router, private ser: RegisterServiceService) { }

  ngOnInit(): void {

  }

  onSignup(x: any) {
    this.ser.addData(x.value).subscribe(
      (r) => { console.log(r) },
      (e) => { console.log(e) }
    )
    this.route.navigateByUrl('profile')
    }
}
