import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremiumToAdminService {
 

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8000/allUsers')
  }

  addData(dt:any){
    return this.http.post('http://localhost:8000/addUser', dt)
  }
 
}
