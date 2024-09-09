import { Component,Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-content-block',
  templateUrl: 'main-layout.component.html',
  
})
export class MainLayoutComponent {
  @Input() rendering: ComponentRendering;
}

