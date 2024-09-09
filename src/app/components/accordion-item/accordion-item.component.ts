import { Component } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
 // Sample data for the accordion with initial state set to inactive

 ReadMore:boolean = true
 visible:boolean = false
 rendering: ComponentRendering;
 
 // Toggle the accordion section by changing its isActive state
 toggleAccordion(index:any) {
  if(index){
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
  }
  //  this.items.forEach((item, i) => {
  //    item.isActive = i === index ? !item.isActive : false;
  //  });
   //this.rendering[index].isActive = !this.rendering[index].isActive;
 }
}
