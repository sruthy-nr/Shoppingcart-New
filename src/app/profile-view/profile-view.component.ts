import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
userid:any=""
constructor(private api:ApiService){
  this.userid=localStorage.getItem("userinfo")
  let data:any={
    "id":this.userid
  }
  this.api.getProfile(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )
}
data:any=[]
}
