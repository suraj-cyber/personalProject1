import { Component, OnInit } from '@angular/core';
import { PremiumToAdminService } from 'src/app/allServices/premium-to-admin.service';

@Component({
  selector: 'app-policy-premium-data',
  templateUrl: './policy-premium-data.component.html',
  styleUrls: ['./policy-premium-data.component.css']
})
export class PolicyPremiumDataComponent implements OnInit {
  premiumDetails:any = []

  constructor(private ser: PremiumToAdminService) { }

  ngOnInit(): void {
    this.getPremiumDt()
  }

  getPremiumDt(){
    this.ser.getData().subscribe(
      (r)=>{
      this.premiumDetails = r
      },
      (er)=>{console.log(er)}
    )
  }

}
