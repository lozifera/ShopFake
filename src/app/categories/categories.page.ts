import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: string[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onCategoryClick(category: string) {
    this.router.navigate(['/home', { category }]);
  }
}