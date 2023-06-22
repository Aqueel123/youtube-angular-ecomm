import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces/product';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductMessage : undefined | string;
  constructor(private produdct: ProductService) {}

  ngOnInit(){}

  addProduct(data: product):void {
    this.produdct.addProduct(data).subscribe((response) => {
      console.warn("response ", response);
      if(response) {
        this.addProductMessage = "Product has been added";
      }

      setTimeout(() => {
        this.addProductMessage = undefined
      }, 3000);
    });
  }

}
