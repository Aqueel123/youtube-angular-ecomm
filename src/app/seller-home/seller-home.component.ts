import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces/product';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productDeleteMessage: undefined | string;
  productList: undefined | product[];

  deleteIcon = faTrash;
  editIcon = faPenToSquare;


constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  deleteProduct(id:number) {
    console.warn("Id ====", id);
    
    this.product.deleteProduct(id).subscribe((response) => {
      if(response) {
        this.productDeleteMessage = "Product has been deleted";
        this.getProductList();
      }
    });

    setTimeout(() => {
      this.productDeleteMessage = undefined;
    }, 3000);
  }

  getProductList(){
    this.product.productList().subscribe((result) => {
      this.productList = result;
    });
  }
}
