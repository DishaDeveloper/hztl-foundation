import { Component, Input, OnInit } from '@angular/core';
import { ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() rendering!: ComponentRendering;

  logoImage: any;
  logoUrl: string = '';
  mainNavigations: any[] = [];
  regions: any[] = [];

  ngOnInit(): void {
    const fields = this.rendering?.fields || {};
    this.logoImage = (fields.logoImage as Field<any>)?.value;
    this.logoUrl = (fields.logoUrl as Field<any>)?.value?.href ?? '';
    this.mainNavigations = (fields.mainNavigations as any[]) || [];
    this.regions = (fields.regions as any[]) || [];
  }
}