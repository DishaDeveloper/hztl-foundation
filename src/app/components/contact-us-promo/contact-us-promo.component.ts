import { Component, Input, OnInit } from '@angular/core';
import {
  ComponentRendering,
} from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-contact-us-promo',
  templateUrl: './contact-us-promo.component.html',
  styleUrls: ['./contact-us-promo.component.scss']
})
export class ContactUsPromoComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  headline = '';
  description = '';
  primaryCTA?: any;
  secondaryCTA?: any;
  image?: any;
  label = '';
  video = '';
  disclaimerText = '';
  alignContent = 'Left';
  backgroundColor = 'Light';

  ngOnInit(): void {
    const fields = this.rendering?.fields as any;
    const params = this.rendering?.params as any;

    if (fields) {
      this.headline = fields.headline?.value || '';
      this.description = fields.description?.value || '';
      this.primaryCTA = fields.primaryCTA;
      this.secondaryCTA = fields.secondaryCTA;
      this.image = fields.image;
      this.label = fields.label?.value || '';
      this.video = fields.video?.value || '';
      this.disclaimerText = fields.disclaimerText?.value || '';
    }

    if (params) {
      this.alignContent = params.alignContent || 'Left';
      this.backgroundColor = params.backgroundColor || 'Light';
    }

    console.log('ContactUsPromo Fields:', fields);
    console.log('ContactUsPromo Params:', params);
  }

  get backgroundClass(): string {
    switch (this.backgroundColor.toLowerCase()) {
      case 'yellow':
        return 'bg-yellow-400';
      case 'beige':
        return 'bg-amber-50';
      case 'brandcolor':
        return 'bg-red-800';
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
