import { Component, OnInit } from '@angular/core';
import { EnquiryToAdminService } from 'src/app/allServices/enquiry-to-admin.service';

@Component({
  selector: 'app-policy-enquiry-data',
  templateUrl: './policy-enquiry-data.component.html',
  styleUrls: ['./policy-enquiry-data.component.css']
})
export class PolicyEnquiryDataComponent implements OnInit {
  enquiryData:any = []

  constructor(private ser: EnquiryToAdminService) { }

  ngOnInit(): void {
    this.getEnquiryDetails()
  }

  getEnquiryDetails(){
   this.ser.getUsersDt().subscribe(
    (r)=>{console.log(r)
    this.enquiryData = r
    },
    (er)=>{console.log(er)},
   )
  }
}
