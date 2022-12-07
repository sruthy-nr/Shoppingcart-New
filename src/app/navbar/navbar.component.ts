import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private api:ApiService){}
  name=""

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
