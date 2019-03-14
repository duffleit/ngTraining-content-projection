import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';
import { NgTemplateOutlet } from '@angular/common';
import { ShortDescriptionMarkerDirective } from './short-description-marker.directive';

@Component({
  selector: 'app-slide',
  template: `
    <div
      class="slide"
      [ngStyle]="{
        'background-image': 'url(' + backgroundImage + ')'
      }"
    >
      <div class="caption">
        <ng-content></ng-content>
        <ng-container *ngTemplateOutlet="shortDescription"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @ContentChild(ShortDescriptionMarkerDirective, { read: TemplateRef })
  shortDescription: TemplateRef<any>;

  @Input()
  public backgroundImage: string;
}
