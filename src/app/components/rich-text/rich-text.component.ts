import { Component, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';


@Component({
  selector: 'app-content-block',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent {
  console=console;
  @Input() rendering: ComponentRendering;
}
