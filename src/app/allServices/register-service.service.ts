import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8081/allUsers')
  }

  addData(dt:any){
    return this.http.post('http://localhost:8081/addUser', dt)
  }

  updateUser(dt:any, id:any){
    return this.http.put('http://localhost:8081/updateUser/'+id, dt)
  }
}
