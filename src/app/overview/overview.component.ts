import { Component, OnInit } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'app-overview',
  template: `
    <div class="container">
      <div (click)="goTo(slide)" class="overview-element" *ngFor="let slide of slides">
        <ng-container *ngTemplateOutlet="slide.shortDescription"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  get slides(): SlideDefinition[] {
    return this.sliderComponent.slides;
  }

  public goTo(slide: SlideDefinition) {
    this.sliderComponent.currentSlide.next(slide);
  }
  
  constructor(private sliderComponent: SliderComponent) {}
}
