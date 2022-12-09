import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addproduct",dataToSend)
  }
  viewProduct=()=>{
    return this.http.get("http://localhost:8080/viewproduct")
  }
  searchProduct=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchproduct",dataToSend)
  }
  userLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userlogin",dataToSend)
  }
  userRegistration=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userregistration",dataToSend)
  }
  getProfile=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/profileview",dataToSend)
  }
}
