import { Component, Input, OnInit } from '@angular/core';
import { ComponentRendering, LinkField } from '@sitecore-jss/sitecore-jss-angular';
import {
  CategoryCard,
  
} from './category-card.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  categoryCards: CategoryCard[] = [];
  primaryCTA: LinkField | null = null;

  ngOnInit(): void {
    const fields = this.rendering?.fields;
    this.categoryCards = fields?.['categoryCards'] as unknown as CategoryCard[] || [];
    this.primaryCTA = fields.primaryCTA as LinkField;
  }
}
