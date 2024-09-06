import { Component } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-content-block',
  templateUrl: 'partial-design-dynamic-placeholder.component.html',
  
})
export class PartialDesignDynamicPlaceholderComponent {
  rendering: ComponentRendering;
}

