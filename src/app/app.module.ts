import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';
import { ProfileComponent } from './basicPages/profile/profile.component';
import { DashboardComponent } from './basicPages/dashboard/dashboard.component';
import { AboutUsComponent } from './basicPages/about-us/about-us.component';
import { WhyInsuranceComponent } from './basicPages/why-insurance/why-insurance.component';
import { RegisterComponent } from './basicPages/register/register.component';
import { LoginComponent } from './basicPages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './basicPages/home/home.component';
import { NavbarTopComponent } from './include/navbar-top/navbar-top.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminDataComponent } from './admin/admin-data/admin-data.component';
import { UsersDataComponent } from './admin/users-data/users-data.component';
import { PolicyEnquiryDataComponent } from './admin/policy-enquiry-data/policy-enquiry-data.component';
import { PolicyPremiumDataComponent } from './admin/policy-premium-data/policy-premium-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    DashboardComponent,
    AboutUsComponent,
    WhyInsuranceComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarTopComponent,
    AdminDataComponent,
    UsersDataComponent,
    PolicyEnquiryDataComponent,
    PolicyPremiumDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
