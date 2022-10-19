import { Component, OnInit } from '@angular/core';
import { EnquiryToAdminService } from 'src/app/allServices/enquiry-to-admin.service';
import { PremiumToAdminService } from 'src/app/allServices/premium-to-admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ser: EnquiryToAdminService, private ser1: PremiumToAdminService) { }

  ngOnInit(): void {
  }

  onSubmit(x: any) {
    alert("Your request has been subimtted. We will reach you soon!");
    this.ser.addEnquiry(x.value).subscribe(
      (r)=>{console.log(r)},
      (er)=>{console.log(er)}
    )

  }

  onSubmitPolicyForm(x: any) {
    alert("Your details are saved successfully. We will reach you soon")
    this.ser1.addData(x.value).subscribe(
    )
  }

}
