import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Subject, BehaviorSubject } from 'rxjs';
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
  currentSlideIndex: BehaviorSubject<number> = new BehaviorSubject(0);

  @Input() navigationPosition: 'top' | 'bottom' = 'bottom';

  goToSlide(slide: SlideDefinition) {
    this.currentSlideIndex.next(this.slides.indexOf(slide));
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
