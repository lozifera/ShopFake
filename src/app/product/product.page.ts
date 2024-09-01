import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: Product = {} as Product;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }


  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const id = +productId; // Convertir a número
      this.apiService.getProductoById(id).subscribe(data => {
        this.product = data;
      });
    } else {
      // Manejar el caso en que productId sea null
      console.error('Product ID is null');
    }
  }
}