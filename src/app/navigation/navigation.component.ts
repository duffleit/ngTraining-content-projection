import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { i18nPostprocess } from '@angular/core/src/render3';
import { SlideData, SlideDefinition } from '../view-models';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="dot-container">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)">
        <ng-container *ngTemplateOutlet="slide.label"></ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
  constructor(private slider: SliderComponent) { }

  get slides(): SlideDefinition[]{
    return this.slider.slides;
  }

  public goToSlide(slide: SlideDefinition){
    this.slider.currentSlideIndex.next(
      this.slider.slides.map(s => s.data).indexOf(slide.data)
    );
  }
}
