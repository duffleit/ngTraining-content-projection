import { Component } from '@angular/core';
import { SlideDefinition } from './slider/slider.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <app-slider>
        <app-overview></app-overview>
        <app-horizontal-rotator [speed]="3000" [width]="800" [height]="600">
          <app-slide [backgroundImage]="'assets/images/schoenbrunn.png'">
            <ng-template appShortDescriptionMarker>Schön</ng-template>
            <h1><b>Schön</b>brunn Palace</h1>
            <p>A former imperial summer residence.</p>
          </app-slide>
          <app-slide [backgroundImage]="'assets/images/stephansdom.png'">
            <ng-template appShortDescriptionMarker>Chirch</ng-template>
            <h1>St. Stephen's Cathedral</h1>
            <p>One of the most iconic buildings in Vienna.</p>
          </app-slide>
          <app-slide [backgroundImage]="'assets/images/riesenrad.png'">
            <ng-template appShortDescriptionMarker>Wheel</ng-template>
            <h1>Wiener Riesenrad</h1>
            <p>Was the world's tallest extant Ferris wheel till 1985.</p>
          </app-slide>
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
      app-slide h1 {
        font-size: 2rem !important;
        font-weight: normal;
        color: white;
      }
      p {
        font-size: 1.2rem !important;
        font-weight: bold;
        color: white;
      }
    `
  ]
})
export class AppComponent {}
