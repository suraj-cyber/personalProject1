import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/allServices/register-service.service';
import { LoginValidationService } from 'src/app/login-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsersDt:any;
  invalidUsrPass:any;
  check:boolean = true;
  name:any;
  middname:any;
  surname:any;
  spUser:any

  constructor(private route: Router, private ser: RegisterServiceService) { }

  ngOnInit(): void {
  }
  onClickLogin(x: any) {
    this.ser.getData().subscribe(
      (r)=>{
        this.allUsersDt = r;
        this.allUsersDt.forEach((e:any) => {
          if(this.check = true){
            if((x.value.usr == "admin") && (x.value.pass == "admin")){
              this.route.navigateByUrl('admin')
            }

            else if((x.value.usr == e.usr) && (x.value.pass == e.pass)){
              this.spUser = e
              // console.log(e)
              console.log(this.spUser)
              this.name = this.spUser.fn
              this.middname = this.spUser.mn
              this.surname = this.spUser.ln
              this.route.navigateByUrl('profile')
            }
          }
          else{
            this.route.navigateByUrl('**')
            // alert("Invalid Username or Password")
            // console.log("Wrong pass")
          }
        });
      },
      (er)=>{console.log(er)}
    )
  }

}
