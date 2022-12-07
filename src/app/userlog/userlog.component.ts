import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent {
  email=""
  password=""

  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {
          alert("Invalid credentials")
        }
         else {
          this.route.navigate(['/userview'])
        }

      }
      )
    }
}
