import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces/product';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  constructor(private route: ActivatedRoute, private product: ProductService, private router: Router) {}
  productData: undefined | product;
  productUpdateMessage: undefined | string;

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.product.productById(productId).subscribe((response) => {
      this.productData = response;
    });
  }

  updateProduct(data: product) {
    if(this.productData){
      data.id = this.productData.id;
    }
    
    this.product.updateProduct(data).subscribe((response) => {
      if(response) {
        this.productUpdateMessage = "Product has been updated";
      }
    });

    setTimeout(() => {
      this.productUpdateMessage = undefined;
      this.router.navigate(["/seller-home"]);
    }, 3000);
  }
}
