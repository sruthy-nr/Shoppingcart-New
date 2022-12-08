import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name=""
  image=""
  category=""
  description=""
  price=""
  constructor(private api:ApiService){}
  readValues=()=>{
    let product:any={
      "name":this.name,
      "image":this.image,
      "category":this.category,
      "description":this.description,
      "price":this.price
    }
    console.log(product)
    this.api.addProduct(product).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Successfully Added")
          this.name=""
          this.image=""
          this.category=""
          this.description=""
          this.price=""
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
}
