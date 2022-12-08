import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  constructor(private api:ApiService,private route:Router){}
  name=""

  navigate=()=>{
    this.route.navigate(['/navbar'])
  }
  searchdata:any=[]
  readValues=()=>

  {

    let data:any={

      "name":this.name
    }

    console.log(data)

    this.api.searchProduct(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {
          alert("invalid product name")
        }
         else {
          this.searchdata = response
        }

      }

    )

  }

}
