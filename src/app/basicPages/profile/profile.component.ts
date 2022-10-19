import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/allServices/register-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: any;
  middName: any;
  surname: any;
  allData:any;
  spUser:any;
  showUpdateForm:boolean = false;
  updatedData:any
  id:any;

  constructor(private ser: RegisterServiceService) { }

  ngOnInit(): void {
    this.getProfile()
  }

  getProfile() {
    this.ser.getData().subscribe(
      (r) => {
        // console.log(r)
        this.allData = r;
        this.spUser = this.allData[this.allData.length-1]
        console.log(this.spUser)
        this.name = this.spUser.fn
        this.middName = this.spUser.mn
        this.surname = this.spUser.ln
      },
      (er) => { console.log(er) },
    )
  }

  onEdit(){
    console.log("Edited");
    this.showUpdateForm = true
  }
  
  
  onUpdateForm(x:any){
    console.log("Updated");
    this.showUpdateForm = false
    console.log(x.value);
    this.updatedData = x.value
    this.id = this.spUser.id
    console.log(this.updatedData)
    console.log(this.id)
    this.ser.updateUser(this.updatedData, this.id).subscribe(
      (r)=>{console.log(r)},
      (er)=>{console.log(er)},
    )
  }

}
