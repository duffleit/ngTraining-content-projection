import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <app-slider>
        <app-vertical-rotator [speed]="3000" [width]="800" [height]="600">
          <app-slide
            appSlide
            *ngFor="let slide of slides"
            [slide]="slide"
          ></app-slide>
          <app-fontSlide appSlide [slide]="fontSlide"></app-fontSlide>
        </app-vertical-rotator>
        <app-navigation>
          <ng-template appNavigationLabel let-title="caption">
            <b>{{title}}</b>
          </ng-template>
        </app-navigation>
      </app-slider>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fontSlide: SlideDefinition = { caption: 'Hello Vienna' } as any;

  slides: SlideDefinition[] = [
    {
      backgroundImage: 'assets/images/schoenbrunn.png',
      caption: 'Schönbrunn Palace',
      description: 'A former imperial summer residence.',
    },
    {
      backgroundImage: 'assets/images/stephansdom.png',
      caption: "St. Stephen's Cathedral",
      description: 'One of the most iconic buildings in Vienna.',
    },
    {
      backgroundImage: 'assets/images/riesenrad.png',
      caption: 'Wiener Riesenrad',
      description: "Was the world's tallest extant Ferris wheel till 1985.",
    },
  ];
}
