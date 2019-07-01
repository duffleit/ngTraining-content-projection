import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { SlideData } from '../view-models';
// import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-slide',
  template: `
    <div
      class="slide"
      [ngStyle]="{
        'background-image': 'url(' + data.backgroundImage + ')'
      }"
    >
      <div class="caption">
        <div class="title">{{ data.caption }}</div>
        <div class="description">{{ data.description }}</div>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @ContentChild(TemplateRef) public template: TemplateRef<any>;
  @Input() public data: SlideData;
}


