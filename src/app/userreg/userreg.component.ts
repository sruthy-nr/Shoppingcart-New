import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private api:ApiService,private route:Router){}
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
    if(this.password==this.cpassword && this.password != "" && this.email != ""){
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
          this.route.navigate(['/userlog'])
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
