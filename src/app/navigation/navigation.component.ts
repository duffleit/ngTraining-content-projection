import { Component, OnInit } from '@angular/core';
import { SliderComponent, SlideDefinition } from '../slider/slider.component';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="dot-container">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(private slider: SliderComponent) {}

  get slides(): SlideDefinition[] {
    return this.slider.slides;
  }

  goToSlide(slide: SlideDefinition) {
    this.slider.currentSlide.next(slide);
  }

  ngOnInit() {}
}
