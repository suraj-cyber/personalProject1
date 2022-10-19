import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryToAdminService {


  constructor(private http: HttpClient) { }

  getUsersDt() {
    return this.http.get('http://localhost:8090/allUsers')
  }

  addEnquiry(dt: any) {
    return this.http.post('http://localhost:8090/addUser', dt)
  }


}
