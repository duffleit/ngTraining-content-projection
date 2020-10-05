import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SlideDefinition, SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-vertical-rotator',
  templateUrl: './rotator.component.html',
  styleUrls: ['./rotator.component.scss'],
})
export class VerticalRotatorComponent implements OnInit, OnDestroy {
  constructor(private sliderComponent: SliderComponent) {}

  private get slides(): SlideDefinition[] {
    return this.sliderComponent.slides;
  }

  @Input() width: number;
  @Input() height: number;
  @Input() speed: number;

  public offsetY: number = 0;
  public offsetX: number = 0;
  private intervalSubscriber: any;

  public get screenWidth(): number {
    return this.slides.length * this.width;
  }

  public get screenHeight(): number {
    return this.height;
  }

  public get flexDirection(): string {
    return 'row';
  }

  ngOnInit(): void {
    this.intervalSubscriber = interval(this.speed).subscribe((val) => {
      const currentSlideIndex = val % this.slides.length;
      this.offsetX = currentSlideIndex * this.width * -1;
    });

    this.sliderComponent.currentSlide.subscribe(currentSlide => {
      const currentSlideIndex = this.slides.indexOf(currentSlide);
      this.offsetX = currentSlideIndex * this.width * -1;
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
