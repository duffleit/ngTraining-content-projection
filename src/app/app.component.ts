import { Component } from '@angular/core';
import { SlideData } from './view-models';

@Component({
  selector: 'app-root',
  template: `
    <div class="center">
      <app-slider>
        <app-horizontal-rotator 
          [speed]="3000" 
          [width]="800"
          [height]="600">
          <app-slide [data]="data" *ngFor="let data of slideData">
            <ng-template>Go to this {{ data.caption }}</ng-template>
          </app-slide>
        </app-horizontal-rotator>
        <app-navigation></app-navigation>
      </app-slider>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  slideData: SlideData[] = [
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
