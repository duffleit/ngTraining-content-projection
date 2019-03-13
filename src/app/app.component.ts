import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <app-slider>
        <app-horizontal-rotator [speed]="3000" [width]="800" [height]="600">
          <app-slide *ngFor="let slide of slides" [slide]="slide"></app-slide>
        </app-horizontal-rotator>
        <app-navigation></app-navigation>
      </app-slider>
    </div>
  `,
  styles: [
    `
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
    `
  ]
})
export class AppComponent {
  slides: SlideDefinition[] = [
    {
      backgroundImage: 'assets/images/schoenbrunn.png',
      caption: 'Schönbrunn Palace',
      description: 'A former imperial summer residence.'
    },
    {
      backgroundImage: 'assets/images/stephansdom.png',
      caption: "St. Stephen's Cathedral",
      description: 'One of the most iconic buildings in Vienna.'
    },
    {
      backgroundImage: 'assets/images/riesenrad.png',
      caption: 'Wiener Riesenrad',
      description: "Was the world's tallest extant Ferris wheel till 1985."
    }
  ];
}
