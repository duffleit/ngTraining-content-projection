import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-slider',
  template: `
    <div class="dot-container" *ngIf="navigationPosition === 'top'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
    <ng-content></ng-content>
    <div class="dot-container" *ngIf="navigationPosition === 'bottom'">
      <div *ngFor="let slide of slides" class="dot" (click)="goToSlide(slide)"></div>
    </div>
  `,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides: SlideDefinition[] = [];
  @Input() navigationPosition: 'top' | 'bottom' = 'bottom';

  goToSlide(slide: SlideDefinition) {
    const slideToGoTo = this.slides.indexOf(slide);
    /*
    if (this.sliderDirection === 'vertical') {
      this.offsetY = slideToGoTo * this.height * -1;
    } else {
      this.offsetX = slideToGoTo * this.width * -1;
    }
    */
  }


  public registerSlide(slide: SlideDefinition) {
    this.slides.push(slide);
  }
  
}

export interface SlideDefinition {
  backgroundImage: string;
  caption: string;
  description: string;
}
