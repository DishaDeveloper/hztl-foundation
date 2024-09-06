import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';


@Component({
  selector: 'app-content-block',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCard {
  console=console;
  @Input() rendering: ComponentRendering;
}
