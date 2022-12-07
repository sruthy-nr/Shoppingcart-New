import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
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
