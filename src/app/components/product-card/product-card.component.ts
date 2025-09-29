import { Component, Input, OnInit } from '@angular/core';
import {
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-angular';
import { ProductCardFields, ProductCardParams, ProductCardItem } from './product-card.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  title = '';
  description = '';
  primaryCTA?: any;
  disclaimerText = '';
  productCards: ProductCardItem[] = [];
  gridParameters = 'col-12';
  isBadgeFullWidth = false;

  ngOnInit(): void {
    const fields = this.rendering?.fields as unknown as ProductCardFields;
    const params = this.rendering?.params as unknown as ProductCardParams;

    if (fields) {
      this.title = fields.title?.value || '';
      this.description = fields.description?.value || '';
      this.primaryCTA = fields.primaryCTA;
      this.disclaimerText = fields.disclaimerText?.value || '';
      this.productCards = fields.productCards || [];
    }

    if (params) {
      this.gridParameters = params.GridParameters || 'col-12';
      this.isBadgeFullWidth = params.isBadgeFullWidth === '1';
    }

    console.log('ProductCard Fields:', fields);
    console.log('ProductCard Params:', params);
  }

  getBackgroundColor(): string {
    // Orange to yellow gradient as shown in the image
    return 'linear-gradient(135deg, #f97316 0%, #eab308 100%)';
  }

  getGridClass(): string {
    // Convert Sitecore grid parameters to Tailwind classes
    switch (this.gridParameters) {
      case 'col-12':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 'col-6':
        return 'grid-cols-1 sm:grid-cols-2';
      case 'col-4':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 'col-3':
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
    }
  }

  trackByProductId(product: ProductCardItem): string {
    return product.id;
  }
}
