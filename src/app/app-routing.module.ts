import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataComponent } from './admin/admin-data/admin-data.component';
import { PolicyEnquiryDataComponent } from './admin/policy-enquiry-data/policy-enquiry-data.component';
import { PolicyPremiumDataComponent } from './admin/policy-premium-data/policy-premium-data.component';
import { UsersDataComponent } from './admin/users-data/users-data.component';
import { AboutUsComponent } from './basicPages/about-us/about-us.component';
import { DashboardComponent } from './basicPages/dashboard/dashboard.component';
import { HomeComponent } from './basicPages/home/home.component';
import { LoginComponent } from './basicPages/login/login.component';
import { ProfileComponent } from './basicPages/profile/profile.component';
import { RegisterComponent } from './basicPages/register/register.component';
import { WhyInsuranceComponent } from './basicPages/why-insurance/why-insurance.component';

const routes: Routes = [
  {path:'dashboard', component:DashboardComponent },
  {path:'profile', component: ProfileComponent},
  {path:'whyInsurance', component: WhyInsuranceComponent},
  {path:'about', component: AboutUsComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminDataComponent},
  {path:'adminUserData', component: UsersDataComponent},
  {path:'adminPremiumReq', component: PolicyPremiumDataComponent},
  {path:'adminEnquiries', component: PolicyEnquiryDataComponent},
  {path:'**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
