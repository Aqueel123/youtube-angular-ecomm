import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  populatProductData: undefined | product[];

  constructor(private product: ProductService){}

  ngOnInit(): void {
    this.product.popularProduct().subscribe((response) => {
      console.warn("Response ===", response);
      this.populatProductData = response;
    })
  }

}
