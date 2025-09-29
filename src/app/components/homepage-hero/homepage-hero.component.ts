import { Component, Input, OnInit } from '@angular/core';
import {
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-homepage-hero',
  templateUrl: './homepage-hero.component.html',
})
export class HomepageHeroComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  headline = '';
  description = '';
  primaryCTA?: LinkField;
  secondaryCTA?: LinkField;
  desktopImage?: ImageField;

  ngOnInit(): void {
    const slideList = this.rendering?.fields?.heroSlideList;

    const slides = slideList as any[]; // ✅ safely cast to Item[]
    const firstSlide = slides?.[0] as { [key: string]: any } | undefined;

    if (firstSlide && firstSlide.fields) {
      const fields = firstSlide.fields;

      this.headline = (fields.headline as Field<string>)?.value || '';
      this.description = (fields.description as Field<string>)?.value || '';
      this.primaryCTA = fields.primaryCTA as LinkField;
      this.secondaryCTA = fields.secondaryCTA as LinkField;
      this.desktopImage = fields.desktopImage as ImageField;

    } else {
      console.warn('No slide data found');
    }
  }
}
