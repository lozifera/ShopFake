import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[] = [];
  selectedCategory: string = '';

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category') || '';
      if (this.selectedCategory) {
        this.apiService.getProductsByCategory(this.selectedCategory).subscribe((products) => {
          this.products = products;
        });
      } else {
        this.apiService.getProducts().subscribe((products) => {
          this.products = products;
        });
      }
    });
  }

  onProductClick(productId: number) {
    console.log('Product clicked:', productId);
    this.router.navigate(['/product', productId]);
  }
}