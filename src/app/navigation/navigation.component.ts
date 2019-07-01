import { Component, OnInit, Input } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { i18nPostprocess } from '@angular/core/src/render3';
import { SlideDefinition } from '../slideDefintion';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="dot-container">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{
  @Input() navigationPostion: string;

  constructor(private slider: SliderComponent) { }


  get slides(): SlideDefinition[]{
    return this.slider.slides;
  }

  public goToSlide(slide: SlideDefinition){
    this.slider.currentSlideIndex.next(this.slider.slides.indexOf(slide));
  }
}
