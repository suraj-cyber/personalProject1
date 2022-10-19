import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogout: boolean = false
  showLogin: boolean = true
  showSignup: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.showLogout = true
    this.showLogin = false
    this.showSignup = false
  }
  onLogout() {
    this.showLogout = false
    this.showLogin = true
    this.showSignup = true
  }

}
