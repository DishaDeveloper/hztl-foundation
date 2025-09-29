import { Component, Input, OnInit } from '@angular/core';
import {
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-factory-promo',
  templateUrl: './factory-promo.component.html'
})
export class FactoryPromoComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  headline = '';
  description = '';
  primaryCTA?: LinkField;
  secondaryCTA?: LinkField;
  image?: ImageField;
  label = '';
  video = '';
  disclaimerText = '';
  alignContent = 'Left';
  backgroundColor = 'Light';

  ngOnInit(): void {
    const fields = this.rendering?.fields;

    if (fields) {
      this.headline = (fields.headline as Field<string>)?.value || '';
      this.description = (fields.description as Field<string>)?.value || '';
      this.primaryCTA = fields.primaryCTA as LinkField;
      this.secondaryCTA = fields.secondaryCTA as LinkField;
      this.image = fields.image as ImageField;
      this.label = (fields.label as Field<string>)?.value || '';
      this.video = (fields.video as Field<string>)?.value || '';
      this.disclaimerText = (fields.disclaimerText as Field<string>)?.value || '';
    }

    // Get alignment and background color from params
    const params = this.rendering?.params;
    if (params) {
      this.alignContent = params.alignContent || 'Left';
      this.backgroundColor = params.backgroundColor || 'Light';
    }

    console.log('FactoryPromo Fields:', fields);
    console.log('FactoryPromo Params:', params);
  }

  get backgroundClass(): string {
    switch (this.backgroundColor.toLowerCase()) {
      case 'yellow':
        return 'bg-yellow-400';
      case 'beige':
        return 'bg-amber-50';
      case 'brandcolor':
        return 'bg-red-800'; // Dark red/brown color like in the image
      case 'light':
      default:
        return 'bg-gray-50';
    }
  }

  get isLeftAligned(): boolean {
    return this.alignContent.toLowerCase() === 'left';
  }

  get isRightAligned(): boolean {
    return this.alignContent.toLowerCase() === 'right';
  }

  get isCenterAligned(): boolean {
    return this.alignContent.toLowerCase() === 'center';
  }

  getBackgroundColor(): string {
    switch (this.backgroundColor.toLowerCase()) {
      case 'brandcolor':
        return '#fbe74d'; 
      case 'light':
        return '#fff8e6'; 
      case 'default':
        return '#ffffff'; 
      default:
        return '#f9fafb'; 
    }
  }
}
