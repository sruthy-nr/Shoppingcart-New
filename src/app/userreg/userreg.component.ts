import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  address=""
  phone=""
  email=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}
  readValues=()=>{
    let data:any={
      "name":this.name,
      "address":this.address,
      "phone":this.phone,
      "email":this.email,
      "password":this.password,
      "cpassword":this.cpassword

    }
    console.log(data)
    if(this.password==this.cpassword){
    this.api.userRegistration(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Registered Successfully")
          this.name=""
          this.phone=""
          this.address=""
          this.email=""
          this.password=""
          this.cpassword=""

        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
  else{
    alert("Password & Confirm password does not match")
  
  }
}

}
